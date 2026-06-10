import { useState } from "react";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState("");

  const symptomList = [
    "🤕 Headache",
    "🤢 Nausea",
    "👁 Blurred Vision",
    "⚡ Seizures",
    "🧠 Memory Problems",
    "🗣 Difficulty Speaking",
    "⚖ Loss of Balance",
    "💪 Weakness in Arms or Legs",
  ];

  const handleCheckbox = (symptom) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(
        symptoms.filter((s) => s !== symptom)
      );
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const analyzeSymptoms = () => {
    const score = symptoms.length;

    if (score <= 2) {
      setResult(
        "🟢 Low Risk - Symptoms appear mild."
      );
    } else if (score <= 5) {
      setResult(
        "🟠 Moderate Risk - MRI scan is recommended."
      );
    } else {
      setResult(
        "🔴 High Risk - Immediate medical evaluation is recommended."
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1>🩺 AI Symptom Checker</h1>

        <p
          style={{
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          Select symptoms and get an AI-powered
          brain tumor risk assessment.
        </p>
      </div>

      {/* Statistics Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div className="card">
          🧠 Brain Health
        </div>

        <div className="card">
          ⚡ Instant Analysis
        </div>

        <div className="card">
          📊 Risk Prediction
        </div>
      </div>

      {/* Symptom Form */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Select Symptoms
        </h2>

        {symptomList.map((symptom) => (
          <label
            key={symptom}
            style={{
              display: "block",
              marginBottom: "15px",
              fontSize: "18px",
            }}
          >
            <input
              type="checkbox"
              onChange={() =>
                handleCheckbox(symptom)
              }
              style={{
                marginRight: "10px",
              }}
            />

            {symptom}
          </label>
        ))}

        <button
          onClick={analyzeSymptoms}
          style={{
            marginTop: "20px",
            padding: "15px 35px",
            background:
              "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          🚀 Analyze Symptoms
        </button>
      </div>

      {/* Result */}
      {result && (
        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📄 AI Assessment</h2>

          <p
            style={{
              marginTop: "15px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {result}
          </p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            Based on selected symptoms, further
            MRI analysis may be recommended.
          </p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;