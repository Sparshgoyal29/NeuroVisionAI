import { useEffect, useState } from "react";
import API from "../services/api";
import jsPDF from "jspdf";

function Reports() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  const fetchReports = () => {
    API.get("/reports")
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const deleteReport = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(
        `/delete-report/${id}`
      );

      fetchReports();
    } catch (error) {
      console.log(error);
    }
  };

  const downloadPDF = (report) => {
    const doc = new jsPDF();

    doc.setFillColor(15, 23, 42);
    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text(
      "NeuroVision AI MRI Report",
      20,
      18
    );

    doc.setTextColor(0, 0, 0);

    doc.setFontSize(14);

    doc.text(
      `Patient Name: ${report.patient_name}`,
      20,
      60
    );

    doc.text(
      `Prediction: ${report.prediction.toUpperCase()}`,
      20,
      80
    );

    doc.text(
      `Confidence: ${Number(
        report.confidence
      ).toFixed(2)}%`,
      20,
      100
    );

    doc.text(
      `Date: ${report.date}`,
      20,
      120
    );

    doc.save(
      `${report.patient_name}_MRI_Report.pdf`
    );
  };

  const filteredReports =
    reports.filter((report) =>
      report.patient_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const gliomaCount =
    reports.filter(
      (r) => r.prediction === "glioma"
    ).length;

  const meningiomaCount =
    reports.filter(
      (r) => r.prediction === "meningioma"
    ).length;

  const pituitaryCount =
    reports.filter(
      (r) => r.prediction === "pituitary"
    ).length;

  const noTumorCount =
    reports.filter(
      (r) => r.prediction === "notumor"
    ).length;

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        📊 MRI Reports Dashboard
      </h1>

      {/* Statistics Cards */}
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
          {reports.length}
        </div>

        <div className="card">
          🔴 Glioma
          <br />
          {gliomaCount}
        </div>

        <div className="card">
          🟠 Meningioma
          <br />
          {meningiomaCount}
        </div>

        <div className="card">
          🟣 Pituitary
          <br />
          {pituitaryCount}
        </div>

        <div className="card">
          🟢 No Tumor
          <br />
          {noTumorCount}
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search Patient Name..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "12px",
          width: "350px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginBottom: "25px",
        }}
      />

      {/* Table */}
      <div
        style={{
          overflowX: "auto",
          background: "white",
          borderRadius: "12px",
          boxShadow:
            "0px 0px 15px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0f172a",
                color: "white",
              }}
            >
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Patient</th>
              <th style={{ padding: "12px" }}>Prediction</th>
              <th style={{ padding: "12px" }}>Confidence</th>
              <th style={{ padding: "12px" }}>Date</th>
              <th style={{ padding: "12px" }}>PDF</th>
              <th style={{ padding: "12px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredReports.map(
              (report) => (
                <tr
                  key={report.id}
                  style={{
                    textAlign: "center",
                    borderBottom:
                      "1px solid #eee",
                  }}
                >
                  <td style={{ padding: "12px" }}>
                    {report.id}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {report.patient_name}
                  </td>

                  <td style={{ padding: "12px" }}>
                    <span
                      style={{
                        padding:
                          "6px 12px",
                        borderRadius:
                          "20px",
                        color:
                          "white",
                        fontWeight:
                          "bold",
                        background:
                          report.prediction ===
                          "glioma"
                            ? "#ef4444"
                            : report.prediction ===
                              "meningioma"
                            ? "#f97316"
                            : report.prediction ===
                              "pituitary"
                            ? "#9333ea"
                            : "#22c55e",
                      }}
                    >
                      {
                         report.prediction.charAt(0).toUpperCase() +
                         report.prediction.slice(1)
                      }
                    </span>
                  </td>

                  <td style={{ padding: "12px" }}>
                    {Number(
                      report.confidence
                    ).toFixed(2)}
                    %
                  </td>

                  <td style={{ padding: "12px" }}>
                    {report.date}
                  </td>

                  <td style={{ padding: "12px" }}>
                    <button
                      onClick={() =>
                        downloadPDF(
                          report
                        )
                      }
                      style={{
                        background:
                          "#16a34a",
                        color:
                          "white",
                        border:
                          "none",
                        padding:
                          "8px 15px",
                        borderRadius:
                          "6px",
                        cursor:
                          "pointer",
                      }}
                    >
                      PDF
                    </button>
                  </td>

                  <td style={{ padding: "12px" }}>
                    <button
                      onClick={() =>
                        deleteReport(
                          report.id
                        )
                      }
                      style={{
                        background:
                          "#dc2626",
                        color:
                          "white",
                        border:
                          "none",
                        padding:
                          "8px 15px",
                        borderRadius:
                          "6px",
                        cursor:
                          "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;