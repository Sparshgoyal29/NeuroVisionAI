import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Analytics() {
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

  const glioma = reports.filter(
    (r) => r.prediction === "glioma"
  ).length;

  const meningioma = reports.filter(
    (r) => r.prediction === "meningioma"
  ).length;

  const pituitary = reports.filter(
    (r) => r.prediction === "pituitary"
  ).length;

  const notumor = reports.filter(
    (r) => r.prediction === "notumor"
  ).length;

  const totalReports = reports.length;

  const pieData = {
    labels: [
      "Glioma",
      "Meningioma",
      "Pituitary",
      "No Tumor",
    ],
    datasets: [
      {
        data: [
          glioma,
          meningioma,
          pituitary,
          notumor,
        ],
        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#8b5cf6",
          "#22c55e",
        ],
      },
    ],
  };

  const barData = {
    labels: [
      "Glioma",
      "Meningioma",
      "Pituitary",
      "No Tumor",
    ],
    datasets: [
      {
        label: "Cases",
        data: [
          glioma,
          meningioma,
          pituitary,
          notumor,
        ],
        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#8b5cf6",
          "#22c55e",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1300px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        📊 NeuroVision Analytics Dashboard
      </h1>

      {/* Statistics Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "white",
          }}
        >
          📄 Reports = <strong>{totalReports}</strong>
        </div>

        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg,#ef4444,#dc2626)",
            color: "white",
          }}
        >
          🔴 Glioma = <strong>{glioma}</strong>
        </div>

        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg,#f97316,#ea580c)",
            color: "white",
          }}
        >
          🟠 Meningioma = <strong>{meningioma}</strong>
        </div>

        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg,#8b5cf6,#7c3aed)",
            color: "white",
          }}
        >
          🟣 Pituitary = <strong>{pituitary}</strong>
        </div>

        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg,#22c55e,#16a34a)",
            color: "white",
          }}
        >
          🟢 No Tumor = <strong>{notumor}</strong>
        </div>

        <div
          className="card"
          style={{
            background:
              "linear-gradient(135deg,#0f172a,#1e293b)",
            color: "white",
          }}
        >
          🎯 Accuracy = <strong>98%</strong>
        </div>
      </div>

      {/* Charts Section */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Pie Chart */}
        <div
          style={{
            flex: 1,
            minWidth: "450px",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0px 0px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            🥧 Tumor Distribution
          </h2>

          <Pie data={pieData} />
        </div>

        {/* Bar Chart */}
        <div
          style={{
            flex: 1,
            minWidth: "550px",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0px 0px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            📈 Tumor Statistics
          </h2>

          <Bar data={barData} />
        </div>
      </div>

      {/* Summary Panel */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow:
            "0px 0px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2>📋 Analytics Summary</h2>

        <p>
          Total MRI Reports Analyzed:
          <strong> {totalReports}</strong>
        </p>

        <p>
          Most Common Tumor:
          <strong>
            {" "}
            {Math.max(
              glioma,
              meningioma,
              pituitary,
              notumor
            ) === glioma
              ? "Glioma"
              : Math.max(
                  glioma,
                  meningioma,
                  pituitary,
                  notumor
                ) === meningioma
              ? "Meningioma"
              : Math.max(
                  glioma,
                  meningioma,
                  pituitary,
                  notumor
                ) === pituitary
              ? "Pituitary"
              : "No Tumor"}
          </strong>
        </p>

        <p>
          AI Detection Accuracy:
          <strong> 98%</strong>
        </p>
      </div>
    </div>
  );
}

export default Analytics;