import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Login page for user authentication flow. (Simulated only)
 * @param {Object} props Callback for login.
 */
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  // Demo login validation (should integrate with backend)
  const handleLogin = (e) => {
    e.preventDefault();
    setErr("");
    if (username && password) {
      // Mock "authenticated"
      onLogin({ username });
    } else {
      setErr("Please enter both username and password.");
    }
  };

  return (
    <div style={{maxWidth: 400, margin:"2rem auto", padding: 20, border: "1px solid var(--border-color)", borderRadius: 10}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} autoComplete="off">
        <div>
          <input
            style={{width:"100%",marginBottom:10,padding:8}}
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            style={{width:"100%",marginBottom:10,padding:8}}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" style={{width:"100%"}}>Login</button>
        {err && <div style={{color:"red", marginTop:8}}>{err}</div>}
      </form>
    </div>
  );
}

export default Login;
