function Login() {
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
        <h1>Login</h1>

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
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;