import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    API.get("/reports")
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalReports = reports.length;

  const totalPatients = new Set(
    reports.map((r) => r.patient_name)
  ).size;

  const gliomaCount = reports.filter(
    (r) => r.prediction === "glioma"
  ).length;

  const meningiomaCount = reports.filter(
    (r) => r.prediction === "meningioma"
  ).length;

  const pituitaryCount = reports.filter(
    (r) => r.prediction === "pituitary"
  ).length;

  const noTumorCount = reports.filter(
    (r) => r.prediction === "notumor"
  ).length;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>🧠 NeuroVision AI</h2>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "30px",
          }}
        >
          <li style={{ marginBottom: "20px" }}>
            <Link
              to="/dashboard"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Dashboard
            </Link>
          </li>

          <li style={{ marginBottom: "20px" }}>
            <Link
              to="/upload"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Upload MRI
            </Link>
          </li>

          <li style={{ marginBottom: "20px" }}>
            <Link
              to="/reports"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Reports
            </Link>
          </li>

          <li style={{ marginBottom: "20px" }}>
            <Link
              to="/analytics"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Analytics
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          background: "#f8fafc",
        }}
      >
        <h1>📊 Doctor Dashboard</h1>

        <p
          style={{
            marginTop: "10px",
            marginBottom: "30px",
          }}
        >
          Welcome to SND NeuroVision AI Healthcare Platform.
        </p>

        {/* Real Statistics */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <div className="card">
            📄 Reports
            <br />
            {totalReports}
          </div>

          <div className="card">
            👨‍⚕️ Patients
            <br />
            {totalPatients}
          </div>

          <div className="card">
            🔴 Glioma
            <br />
            {gliomaCount}
          </div>

          <div className="card">
            🟢 No Tumor
            <br />
            {noTumorCount}
          </div>
        </div>

        {/* Tumor Summary */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginBottom: "30px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📈 Tumor Statistics</h2>

          <p>🔴 Glioma Cases: {gliomaCount}</p>
          <p>🟠 Meningioma Cases: {meningiomaCount}</p>
          <p>🟣 Pituitary Cases: {pituitaryCount}</p>
          <p>🟢 No Tumor Cases: {noTumorCount}</p>
        </div>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div className="card">
            🧠 MRI Upload
          </div>

          <div className="card">
            📄 Reports
          </div>

          <div className="card">
            🤖 AI Assistant
          </div>

          <div className="card">
            📊 Analytics
          </div>
        </div>

        {/* Recent Activity */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "40px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📋 Recent Activity</h2>

          <ul
            style={{
              marginTop: "15px",
              lineHeight: "2",
            }}
          >
            <li>Total Reports Generated: {totalReports}</li>
            <li>Total Patients: {totalPatients}</li>
            <li>Glioma Cases: {gliomaCount}</li>
            <li>No Tumor Cases: {noTumorCount}</li>
          </ul>
        </div>

        {/* Doctor Panel */}
        <div
          style={{
            marginTop: "30px",
            background: "#0f172a",
            color: "white",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h2>👨‍⚕️ Doctor Panel</h2>

          <p>Name: Dr. SPARSH</p>

          <p>Department: Neurology</p>

          <p>Status: Active</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;