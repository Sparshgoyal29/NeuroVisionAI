import { useState } from "react";
import API from "../services/api";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question) {
      alert("Please enter a question");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/chat", {
        question: question,
      });

      setAnswer(response.data.answer);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Failed to get AI response");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(to right, #2563eb, #7c3aed)",
          padding: "70px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "15px",
          }}
        >
          NeuroVision AI Assistant
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          Ask medical questions, learn about brain tumors,
          MRI scans, symptoms and healthcare insights.
        </p>
      </div>

      {/* Main Chat Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "30px",
          background: "white",
          borderRadius: "20px",
          boxShadow:
            "0px 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#0f172a",
          }}
        >
          💬 Ask AI Assistant
        </h2>

        <textarea
          rows="4"
          value={question}
          placeholder="Example: What are symptoms of brain tumor?"
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #d1d5db",
            fontSize: "16px",
            resize: "none",
          }}
        />

        <button
          onClick={askAI}
          style={{
            marginTop: "20px",
            padding: "14px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          🚀 Ask AI
        </button>

        {loading && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#eff6ff",
              borderRadius: "10px",
            }}
          >
            <h3>🔄 AI is thinking...</h3>
            <p>Please wait while NeuroVision AI analyzes your question.</p>
          </div>
        )}

        {answer && (
          <div
            style={{
              marginTop: "30px",
              background: "#f1f5f9",
              padding: "25px",
              borderRadius: "15px",
              borderLeft: "6px solid #2563eb",
            }}
          >
            <h3>🤖 AI Response</h3>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {answer}
            </p>
          </div>
        )}
      </div>

      {/* Feature Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          paddingBottom: "50px",
        }}
      >
        <div className="card">
          Brain Tumor Info
        </div>

        <div className="card">
          Symptom Guidance
        </div>

        <div className="card">
          Medical Knowledge
        </div>

        <div className="card">
          AI Healthcare
        </div>
      </div>
    </div>
  );
}

export default Chatbot;