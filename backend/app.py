from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from ai_service import predict_tumor
from knowledge_base import knowledge
from database import conn, cursor
from datetime import datetime

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@app.route("/")
def home():
    return {
        "message": "Backend Connected Successfully"
    }


@app.route("/upload", methods=["POST"])
def upload_file():

    if "file" not in request.files:
        return jsonify({
            "error": "No file uploaded"
        }), 400

    file = request.files["file"]

    filepath = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    file.save(filepath)

    prediction, confidence = predict_tumor(
        filepath
    )

    current_date = datetime.now().strftime(
        "%d-%m-%Y %H:%M"
    )

    patient_name = request.form.get(
        "patient_name",
        "Unknown"
    )

    cursor.execute(
        """
        INSERT INTO reports
        (
            patient_name,
            prediction,
            confidence,
            date
        )
        VALUES (?, ?, ?, ?)
        """,
        (
            patient_name,
            prediction,
            confidence,
            current_date
        )
    )

    conn.commit()

    return jsonify({
        "message": "Prediction Complete",
        "prediction": prediction,
        "confidence": round(confidence, 2)
    })


@app.route("/chat", methods=["POST"])
def chat():

    data = request.json

    question = data["question"].lower()

    for key in knowledge:
        if key in question:
            return jsonify({
                "answer": knowledge[key]
            })

    return jsonify({
        "answer":
        "I do not have information about that topic yet."
    })


@app.route("/reports")
def reports():

    cursor.execute(
        "SELECT * FROM reports ORDER BY id DESC"
    )

    data = cursor.fetchall()

    reports_list = []

    for row in data:
        reports_list.append({
            "id": row[0],
            "patient_name": row[1],
            "prediction": row[2],
            "confidence": row[3],
            "date": row[4]
        })

    return jsonify(reports_list)


@app.route("/history")
def history():

    cursor.execute(
        "SELECT * FROM reports ORDER BY id DESC"
    )

    data = cursor.fetchall()

    history_list = []

    for row in data:
        history_list.append({
            "id": row[0],
            "patient_name": row[1],
            "prediction": row[2],
            "confidence": row[3],
            "date": row[4]
        })

    return jsonify(history_list)


@app.route("/delete-report/<int:id>", methods=["DELETE"])
def delete_report(id):

    cursor.execute(
        "DELETE FROM reports WHERE id=?",
        (id,)
    )

    conn.commit()

    return jsonify({
        "message": "Report Deleted"
    })


if __name__ == "__main__":
    app.run(debug=True)