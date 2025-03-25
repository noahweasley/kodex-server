import { useState } from "react";
import { LuEgg } from "react-icons/lu";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", { email, password });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "380px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "1px solid #FACC15",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              color: "#D97706",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            <LuEgg style={{ fontSize: "24px" }} /> Login
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #D1D5DB",
              borderRadius: "4px",
              outline: "none",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #D1D5DB",
              borderRadius: "4px",
              outline: "none",
            }}
          />
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#FACC15",
              color: "white",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
