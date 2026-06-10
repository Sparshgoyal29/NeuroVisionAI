import { useEffect, useState } from "react";
import API from "../services/api";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/history")
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredHistory = history.filter((item) =>
    item.patient_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const gliomaCount = history.filter(
    (item) => item.prediction === "glioma"
  ).length;

  const meningiomaCount = history.filter(
    (item) => item.prediction === "meningioma"
  ).length;

  const pituitaryCount = history.filter(
    (item) => item.prediction === "pituitary"
  ).length;

  const noTumorCount = history.filter(
    (item) => item.prediction === "notumor"
  ).length;

  return (
    <div
      style={{
        padding: "40px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#0f172a",
        }}
      >
        📋 Patient History Dashboard
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
          {history.length}
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

      {/* Search Box */}
      <input
        type="text"
        placeholder="🔍 Search Patient Name..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "12px",
          width: "320px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          marginBottom: "25px",
        }}
      />

      {/* Table Card */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow:
            "0 0 15px rgba(0,0,0,0.08)",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead
            style={{
              background: "#0f172a",
              color: "white",
            }}
          >
            <tr>
              <th style={{ padding: "15px" }}>
                ID
              </th>

              <th style={{ padding: "15px" }}>
                Patient
              </th>

              <th style={{ padding: "15px" }}>
                Tumor Type
              </th>

              <th style={{ padding: "15px" }}>
                Confidence
              </th>

              <th style={{ padding: "15px" }}>
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredHistory.map(
              (item) => (
                <tr
                  key={item.id}
                  style={{
                    borderBottom:
                      "1px solid #eee",
                  }}
                >
                  <td
                    style={{
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    {item.id}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                    }}
                  >
                    {item.patient_name}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                    }}
                  >
                    <span
                      style={{
                        padding:
                          "6px 12px",
                        borderRadius:
                          "20px",
                        color: "white",
                        fontWeight:
                          "bold",
                        background:
                          item.prediction ===
                          "glioma"
                            ? "#ef4444"
                            : item.prediction ===
                              "meningioma"
                            ? "#f97316"
                            : item.prediction ===
                              "pituitary"
                            ? "#9333ea"
                            : "#22c55e",
                      }}
                    >
                      {
                        item.prediction
                      }
                    </span>
                  </td>

                  <td
                    style={{
                      padding: "15px",
                    }}
                  >
                    {Number(
                      item.confidence
                    ).toFixed(2)}
                    %
                  </td>

                  <td
                    style={{
                      padding: "15px",
                    }}
                  >
                    {item.date}
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

export default History;