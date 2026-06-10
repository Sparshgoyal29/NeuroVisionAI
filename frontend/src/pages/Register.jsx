function Register() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;