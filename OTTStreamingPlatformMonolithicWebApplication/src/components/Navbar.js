import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Navbar displays top navigation including theme toggle and authentication links.
 * @param {Object} props Toggle and auth info for display.
 * @param {function} props.onToggleTheme Toggle theme callback.
 * @param {string} props.theme Current theme ("light"/"dark").
 * @param {boolean} props.isAuthenticated Whether user is logged in.
 * @param {function} props.onLogout Logout callback.
 */
function Navbar({ onToggleTheme, theme, isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      height: "60px",
      background: "var(--bg-secondary)",
      padding: "0 1.5rem",
      borderBottom: "1px solid var(--border-color)",
      justifyContent: "space-between"
    }}>
      <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
        <span style={{fontWeight: "bold", color: "var(--text-secondary)", fontSize: "1.2rem"}}>OTTStream</span>
        <NavLink to="/" className={({isActive}) => isActive ? "navbar-active" : ""} style={{marginRight: "1rem"}}>Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/devicesync">Device Sync</NavLink>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
        <button onClick={onToggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {!isAuthenticated ? (
          <NavLink to="/login"><button>Login</button></NavLink>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
