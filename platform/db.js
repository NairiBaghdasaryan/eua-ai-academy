const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const databasePath = process.env.EUA_DB_PATH || path.join(dataDir, "eua-ai.db");
const db = new Database(databasePath);

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'student',
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS modules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sort_order INTEGER NOT NULL,
    title_en TEXT NOT NULL,
    title_hy TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS lessons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id INTEGER NOT NULL REFERENCES modules(id),
    sort_order INTEGER NOT NULL,
    title_en TEXT NOT NULL,
    title_hy TEXT NOT NULL,
    youtube_url TEXT DEFAULT '',
    description_en TEXT DEFAULT '',
    description_hy TEXT DEFAULT ''
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER NOT NULL REFERENCES users(id),
    lesson_id INTEGER NOT NULL REFERENCES lessons(id),
    completed_at TEXT DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, lesson_id)
  );

  CREATE TABLE IF NOT EXISTS quiz_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id INTEGER NOT NULL REFERENCES modules(id),
    sort_order INTEGER NOT NULL,
    question_en TEXT NOT NULL,
    question_hy TEXT NOT NULL,
    options_json TEXT NOT NULL,
    correct_index INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS quiz_results (
    user_id INTEGER NOT NULL REFERENCES users(id),
    module_id INTEGER NOT NULL REFERENCES modules(id),
    score REAL NOT NULL,
    passed INTEGER NOT NULL,
    completed_at TEXT DEFAULT (datetime('now')),
    PRIMARY KEY (user_id, module_id)
  );

  CREATE TABLE IF NOT EXISTS courses (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    audience TEXT NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('available', 'coming_soon')),
    summary TEXT NOT NULL,
    video_minutes INTEGER,
    module_count INTEGER,
    lesson_count INTEGER,
    exam_count INTEGER,
    price_amd INTEGER,
    telegram_url TEXT,
    sort_order INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS course_interests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_slug TEXT NOT NULL REFERENCES courses(slug),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    UNIQUE(course_slug, email)
  );

  CREATE TABLE IF NOT EXISTS promo_codes (
    code TEXT PRIMARY KEY COLLATE NOCASE,
    discount_percent INTEGER NOT NULL CHECK(discount_percent BETWEEN 0 AND 100),
    active INTEGER NOT NULL DEFAULT 1,
    max_uses INTEGER,
    use_count INTEGER NOT NULL DEFAULT 0,
    expires_at TEXT
  );

  CREATE TABLE IF NOT EXISTS enrollments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id),
    course_slug TEXT NOT NULL REFERENCES courses(slug),
    status TEXT NOT NULL CHECK(status IN ('payment_pending', 'active', 'cancelled')),
    payment_status TEXT NOT NULL CHECK(payment_status IN ('pending', 'paid', 'discounted')),
    amount_amd INTEGER NOT NULL DEFAULT 0,
    promo_code TEXT,
    enrolled_at TEXT DEFAULT (datetime('now')),
    UNIQUE(user_id, course_slug)
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS in_person_interests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_slug TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    role TEXT NOT NULL,
    organization TEXT,
    message TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    UNIQUE(course_slug, email)
  );

  CREATE INDEX IF NOT EXISTS idx_contact_messages_created
  ON contact_messages(created_at);

  CREATE INDEX IF NOT EXISTS idx_course_interests_course_created
  ON course_interests(course_slug, created_at);

  CREATE INDEX IF NOT EXISTS idx_in_person_interests_course_created
  ON in_person_interests(course_slug, created_at);

  CREATE INDEX IF NOT EXISTS idx_enrollments_user_status
  ON enrollments(user_id, status);
`);

const userColumns = db.prepare("PRAGMA table_info(users)").all().map((column) => column.name);
if (!userColumns.includes("first_name")) db.exec("ALTER TABLE users ADD COLUMN first_name TEXT");
if (!userColumns.includes("last_name")) db.exec("ALTER TABLE users ADD COLUMN last_name TEXT");
if (!userColumns.includes("phone")) db.exec("ALTER TABLE users ADD COLUMN phone TEXT");

db.pragma("optimize");

module.exports = db;
