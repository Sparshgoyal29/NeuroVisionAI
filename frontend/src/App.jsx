import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UploadMRI from "./pages/UploadMRI";
import SymptomChecker from "./pages/SymptomChecker";
import Chatbot from "./pages/Chatbot";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav
        style={{
          background: "#0f172a",
          color: "white",
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          SND 🧠 NeuroVision AI
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Dashboard
          </Link>

          <Link
            to="/upload"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Upload MRI
          </Link>

          <Link
            to="/symptoms"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Symptoms
          </Link>

          <Link
            to="/chatbot"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            AI Assistant
          </Link>

          <Link
            to="/reports"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Reports
          </Link>

          <Link
            to="/analytics"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Analytics
          </Link>
          <Link
            to="/history"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            History
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/upload"
          element={<UploadMRI />}
        />

        <Route
          path="/symptoms"
          element={<SymptomChecker />}
        />

        <Route
          path="/chatbot"
          element={<Chatbot />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />
        <Route
          path="/history"
          element={<History />}
        />
      </Routes>

      {/* Footer */}
      <footer
        style={{
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "30px",
          marginTop: "50px",
        }}
      >
        <h3>🧠 NeuroVision AI</h3>

        <p>
          AI Powered Brain Tumor Detection &
          Healthcare Analytics Platform
        </p>

        <p>
          © 2026 All Rights Reserved
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;