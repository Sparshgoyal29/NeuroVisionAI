import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      style={{
        background: "#f8fafc",
        color: "#1e293b",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background:
            "linear-gradient(to right, #2563eb, #7c3aed)",
          color: "white",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="SND Logo"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            marginBottom: "20px",
          }}
        />

        {/* Company Name */}
        <h1
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            letterSpacing: "4px",
          }}
        >
          SND REGENIC
        </h1>

        {/* Main Title */}
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          🧠 NeuroVision AI
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "22px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          AI Powered Brain Tumor Detection,
          Medical Analytics, Symptom Analysis
          and Healthcare Assistant Platform.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            marginTop: "35px",
          }}
        >
          <button
            onClick={() =>
              navigate("/upload")
            }
            style={{
              padding: "15px 30px",
              background: "white",
              color: "#2563eb",
              border: "none",
              borderRadius: "10px",
              marginRight: "15px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Start Analysis
          </button>

          <button
            onClick={scrollToAbout}
            style={{
              padding: "15px 30px",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "60px",
          flexWrap: "wrap",
        }}
      >
        <div className="card">
          🧠 MRI Analysis
        </div>

        <div className="card">
          🩺 Symptom Checker
        </div>

        <div className="card">
          🤖 AI Assistant
        </div>

        <div className="card">
          📊 Analytics
        </div>
      </section>

      {/* Statistics */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
          paddingBottom: "60px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#2563eb" }}>
            1000+
          </h1>
          <p>MRI Scans Analyzed</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#7c3aed" }}>
            98%
          </h1>
          <p>Model Accuracy</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#16a34a" }}>
            24/7
          </h1>
          <p>AI Support</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#dc2626" }}>
            4
          </h1>
          <p>Tumor Classes</p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2>
          Why NeuroVision AI?
        </h2>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "900px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          NeuroVision AI combines Deep Learning,
          MRI Image Analysis, Medical Reporting,
          Symptom Assessment and Healthcare
          Analytics into a single intelligent
          platform for early brain tumor
          detection.
        </p>
      </section>
    </div>
  );
}

export default Home;