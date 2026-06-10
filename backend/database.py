import sqlite3

conn = sqlite3.connect(
    "patients.db",
    check_same_thread=False
)

cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_name TEXT,
    prediction TEXT,
    confidence REAL,
    created_at TEXT
)
""")

conn.commit()