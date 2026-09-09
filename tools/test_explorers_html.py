"""Structural checks for generated handbook HTML. Optional local HTTP smoke test."""
import json
from pathlib import Path
import sys
from urllib.request import Request, urlopen
from lxml import html

ROOT = Path(__file__).resolve().parents[1]
total = flows = images = 0
for lang in ('en', 'hy'):
    data = json.loads((ROOT / f'landing/content/explorers/{lang}.json').read_text(encoding='utf-8'))
    for section in data['sections']:
        for lesson in section['lessons']:
            tree = html.fragment_fromstring(lesson['html'], create_parent='div')
            context = (lang, section['id'], lesson['id'])
            assert not tree.xpath('.//ul/*[not(self::li)]|.//ol/*[not(self::li)]'), context
            assert not tree.xpath('.//li[not(parent::ul or parent::ol)]'), context
            assert not tree.xpath('.//table[not(thead) or not(tbody)]'), context
            total += 1
            flows += len(tree.xpath('.//ol[@class="concept-flow"]'))
            images += len(tree.xpath('.//img'))
if len(sys.argv) > 1:
    base = sys.argv[1].rstrip('/')
    assert base.startswith(('http://127.0.0.1:', 'http://localhost:')), 'Only local smoke tests are supported.'
    for resource in ('ai-explorers.html', 'styles/explorers.css', 'js/explorers.js', 'content/explorers/en.json', 'content/explorers/hy.json', 'content/explorers/downloads/EUA_AI_Explorers_Practice_Pack_v1_1.zip', 'content/explorers/downloads/AI_Cost_Workbook.xlsx'):
        with urlopen(base + '/' + resource, timeout=5) as response:
            assert response.status == 200, resource
    for resource in ['course.html', 'js/course-access.js', 'js/explorers-overview.js', 'styles/explorers-overview.css', 'content/explorers/overview.json'] + [f'assets/explorers/chapter-{i:02}.png' for i in range(1, 9)]:
        with urlopen(Request(base + '/' + resource, method='HEAD'), timeout=5) as response:
            assert response.status == 200, resource
            assert int(response.headers['Content-Length']) > 0, resource
print(f'PASS: {total} lesson fragments; {flows} responsive diagrams; {images} image references; valid list/table structure and requested HTTP checks.')
