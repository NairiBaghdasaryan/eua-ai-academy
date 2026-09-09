"""Convert the approved bilingual handbook editions into portable web lessons.

The Word documents remain unchanged. Run with the bundled Python runtime.
Only explicit public content and curated practice files are exported.
"""
import csv
import hashlib
import html
import json
from pathlib import Path
import re
import shutil
import xml.etree.ElementTree as ET
from zipfile import ZipFile
from lxml import html as lhtml

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'landing' / 'content' / 'explorers'
NS = {k: v for k, v in [
    ('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'),
    ('r', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'),
    ('a', 'http://schemas.openxmlformats.org/drawingml/2006/main'),
    ('wp', 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing')]}

def q(prefix, local):
    return '{' + NS[prefix] + '}' + local

def text(el):
    return ''.join(t.text or '' for t in el.iter(q('w', 't'))).replace('\u2014', '-')

def esc(value):
    return html.escape(value, quote=True)

def url_allowed(value):
    return value.startswith(('https://', 'http://', 'mailto:'))

def display_title(value):
    if not value.isupper():
        return value
    value = value[0] + value[1:].lower()
    value = re.sub(r'\b(ai|api|llm|llms|clear|trace)\b', lambda m: m[0].upper(), value, flags=re.I)
    return re.sub(r'(?<![Ա-Ֆա-ֆ])Աբ(?![Ա-Ֆա-ֆ])', 'ԱԲ', value, flags=re.I).replace('եվ', 'և')

def normalize_lists(markup):
    if not markup.strip():
        return ''
    root = lhtml.fragment_fromstring(markup, create_parent='div')
    for parent in list(root.iter()):
        if parent.tag in ('ul', 'ol'):
            continue
        group = None
        for child in list(parent):
            if child.tag == 'li':
                if group is None:
                    group = lhtml.Element('ul')
                    parent.insert(parent.index(child), group)
                group.append(child)
            else:
                group = None
    return ''.join(lhtml.tostring(c, encoding='unicode') for c in root)

def export(lang):
    src = ROOT / f'output/docx/EUA_AI_Explorers_Handbook_{lang.upper()}_v1_1.docx'
    archive = ZipFile(src)
    xml = ET.fromstring(archive.read('word/document.xml'))
    rels = {r.attrib['Id']: r.attrib['Target'] for r in ET.fromstring(archive.read('word/_rels/document.xml.rels'))}
    assets = DEST / 'assets'
    assets.mkdir(parents=True, exist_ok=True)

    def image_html(drawing):
        blip = drawing.find('.//a:blip', NS)
        if blip is None:
            return ''
        target = rels.get(blip.get(q('r', 'embed')), '')
        props = drawing.find('.//wp:docPr', NS)
        alt = props.get('descr', '') if props is not None else ''
        if ' -> ' in alt:
            return '<ol class="concept-flow">' + ''.join(f'<li><span>{i+1:02}</span>{esc(label)}</li>' for i, label in enumerate(alt.split(' -> '))) + '</ol>'
        binary = archive.read('word/' + target)
        filename = hashlib.sha256(binary).hexdigest()[:16] + Path(target).suffix
        (assets / filename).write_bytes(binary)
        extent = drawing.find('.//wp:extent', NS)
        small = extent is not None and int(extent.get('cx', '0')) < 1000000
        cls = 'tool-logo' if small else 'lesson-figure'
        return f'<img class="{cls}" src="content/explorers/assets/{filename}" alt="{esc(alt)}" loading="lazy">'

    def inline(el):
        result = ''
        for item in el:
            tag = item.tag
            if tag == q('w', 'r'):
                value = ''
                for child in item:
                    if child.tag == q('w', 't'):
                        value += esc((child.text or '').replace('\u2014', '-'))
                    elif child.tag == q('w', 'br') and child.get(q('w', 'type')) != 'page':
                        value += '<br>'
                    elif child.tag == q('w', 'tab'):
                        value += ' '
                    elif child.tag == q('w', 'drawing'):
                        value += image_html(child)
                props = item.find('w:rPr', NS)
                if props is not None and props.find('w:b', NS) is not None and value:
                    value = '<strong>' + value + '</strong>'
                if props is not None and props.find('w:i', NS) is not None and value:
                    value = '<em>' + value + '</em>'
                result += value
            elif tag == q('w', 'hyperlink'):
                target = rels.get(item.get(q('r', 'id')), '')
                value = inline(item)
                result += f'<a href="{esc(target)}" target="_blank" rel="noopener noreferrer">{value}</a>' if url_allowed(target) else value
        return result

    def paragraph(p):
        value = inline(p)
        if not value.strip():
            return ''
        style = p.find('w:pPr/w:pStyle', NS)
        name = style.get(q('w', 'val'), '') if style is not None else ''
        if 'concept-flow' in value:
            return value
        if name.startswith('Heading'):
            return '<h3>' + esc(display_title(text(p))) + '</h3>'
        if name == 'Caption':
            return '<p class="figure-caption">' + value + '</p>'
        if name.startswith('List'):
            return '<li>' + value + '</li>'
        return '<p>' + value + '</p>'

    def blocks(parent):
        output = ''
        list_open = False
        for child in parent:
            part = paragraph(child) if child.tag == q('w', 'p') else table(child) if child.tag == q('w', 'tbl') else ''
            if part.startswith('<li>') and not list_open:
                output += '<ul>'
                list_open = True
            elif part and not part.startswith('<li>') and list_open:
                output += '</ul>'
                list_open = False
            output += part
        return output + ('</ul>' if list_open else '')

    def table(el):
        rows = el.findall('w:tr', NS)
        if len(rows) == 1:
            cells = [blocks(c) for c in rows[0].findall('w:tc', NS)]
            content = ''.join(cells)
            return '<aside class="lesson-callout">' + content + '</aside>' if content else ''
        first = [text(c) for c in rows[0].findall('w:tc', NS)]
        header = el.find('w:tr/w:trPr/w:tblHeader', NS) is not None
        if not header and len(first) == 2 and len(rows) in (4, 5):
            return '<div class="map-grid">' + ''.join('<div>' + blocks(c) + '</div>' for r in rows for c in r.findall('w:tc', NS)) + '</div>'
        output = '<div class="table-scroll" tabindex="0" role="region" aria-label="' + ('Տվյալների աղյուսակ' if lang == 'hy' else 'Data table') + '"><table>'
        for ri, row in enumerate(rows):
            output += '<thead><tr>' if ri == 0 else '<tr>'
            for cell in row.findall('w:tc', NS):
                tag = 'th' if ri == 0 else 'td'
                output += f'<{tag}' + (' scope="col"' if ri == 0 else '') + '>' + blocks(cell) + f'</{tag}>'
            output += '</tr></thead><tbody>' if ri == 0 else '</tr>'
        return output + '</tbody></table></div>'

    sections = []
    current = None
    lesson = None
    started = False
    chapter_count = 0
    support = 0
    preface = 'Նախաբան' if lang == 'hy' else 'Preface'
    for child in xml.find('w:body', NS):
        style = child.find('w:pPr/w:pStyle', NS)
        name = style.get(q('w', 'val'), '') if style is not None else ''
        value = text(child).strip()
        if not started:
            if value != preface:
                continue
            started = True
        if name in ('Heading1', 'ChapterTitle'):
            if name == 'ChapterTitle':
                chapter_count += 1
                sid = str(chapter_count)
            else:
                support += 1
                sid = 'guide-' + str(support)
            current = {'id': sid, 'title': value, 'chapter': name == 'ChapterTitle', 'lessons': []}
            lesson = {'id': 'intro', 'title': 'Ակնարկ' if lang == 'hy' else 'Overview', 'html': ''}
            current['lessons'].append(lesson)
            sections.append(current)
            continue
        if name == 'Heading2' and current:
            lesson = {'id': str(len(current['lessons'])), 'title': value, 'html': ''}
            current['lessons'].append(lesson)
            continue
        if current and lesson:
            part = paragraph(child) if child.tag == q('w', 'p') else table(child) if child.tag == q('w', 'tbl') else ''
            lesson['html'] += part
    for section in sections:
        if section['chapter'] and section['id'] != '8' and len(section['lessons']) > 1:
            section['description'] = re.sub('<[^>]+>', '', section['lessons'][0]['html']).strip()
            section['lessons'].pop(0)
            # Matching bilingual editions have the same structural order.
            practice_start = {'1':4,'2':5,'3':5,'4':6,'5':9,'6':5,'7':4}[section['id']]
            tail = section['lessons'][practice_start:]
            section['lessons'] = section['lessons'][:practice_start] + [{
                'id': 'practice', 'title': 'Փորձ, ամփոփում և ինքնաստուգում' if lang == 'hy' else 'Practice, reflection and self-check',
                'html': ''.join('<h3>' + esc(display_title(e['title'])) + '</h3>' + e['html'] for e in tail if e['title'] not in ('Check your understanding', 'Ստուգեք ձեր ըմբռնումը')),
                'quiz': int(section['id']) - 1,
            }]
        for entry in section['lessons']:
            entry['title'] = display_title(entry['title'])
        section['title'] = display_title(section['title'])
        for entry in section['lessons']:
            entry['html'] = normalize_lists(entry['html'])
            plain = re.sub('<[^>]+>', ' ', entry['html'])
            entry['minutes'] = max(1, round(len(plain.split()) / 170))
        section['lessons'] = [e for e in section['lessons'] if e['html'].strip()]
    # Remove print-production notes and the end marker from the learner view.
    for section in sections:
        section['lessons'] = [e for e in section['lessons'] if e['title'] not in ('Version history', 'Տարբերակների պատմություն')]
    answers = next(s for s in sections if s['id'] == 'guide-6')
    quizzes = []
    for unit in answers['lessons'][:7]:
        pairs = []
        root = lhtml.fragment_fromstring(unit['html'], create_parent='div')
        for p in root.xpath('./p[strong]'):
            # Word can split Armenian words and spaces into many formatted runs.
            lead = ''.join(s.text_content() for s in p.findall('strong'))
            if re.match(r'^\d\.\d', lead):
                question = re.sub(r'^\d\.\d\s+', '', lead).strip()
                answer = p.text_content()[len(lead):].strip()
                pairs.append([question, answer])
        assert len(pairs) == 2, (lang, unit['title'], pairs)
        quizzes.append(pairs)
    data = {'version': '1.1', 'language': lang, 'author': 'Nairi Baghdasaryan, PhD', 'sections': sections, 'quizzes': quizzes}
    pack = ROOT / 'output/practice-pack-v1.1'
    for key, filename in [('tools', 'tool_directory'), ('useCases', 'use_cases')]:
        with (pack / f'{filename}_{lang.upper()}.csv').open(encoding='utf-8-sig', newline='') as stream:
            data[key] = list(csv.DictReader(stream))
    # Reuse the supplied handbook's logos without making remote image requests.
    logo_map = {}
    for section in sections:
        for unit in section['lessons']:
            tree = lhtml.fragment_fromstring(unit['html'], create_parent='div')
            for image in tree.xpath('.//img[@class="tool-logo"]'):
                original = image.get('alt', '')
                name = re.sub(r' logo$', '', original)
                logo_map[name.casefold()] = image.get('src')
                if lang == 'hy' and original.endswith(' logo'):
                    image.set('alt', name + ' լոգո')
            unit['html'] = ''.join(lhtml.tostring(c, encoding='unicode') for c in tree)
    for tool in data['tools']:
        tool['logo'] = logo_map.get(tool['name'].casefold(), '')
    (DEST / f'{lang}.json').write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(lang, len(sections), 'sections;', sum(len(c['lessons']) for c in sections), 'reading units;', len(data['useCases']), 'use cases')
    return data

if __name__ == '__main__':
    for lang in ('en', 'hy'):
        export(lang)
    downloads = DEST / 'downloads'
    downloads.mkdir(exist_ok=True)
    for filename in ('EUA_AI_Explorers_Practice_Pack_v1_1.zip',):
        shutil.copy2(ROOT / 'output' / filename, downloads / filename)
    shutil.copy2(ROOT / 'output/practice-pack-v1.1/AI_Cost_Workbook.xlsx', downloads / 'AI_Cost_Workbook.xlsx')
