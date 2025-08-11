import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import DeviceSync from "./pages/DeviceSync";
import Login from "./pages/Login";

/**
 * PUBLIC_INTERFACE
 * App is the root of the OTT streaming platform. Centralizes global state, theme, and authentication logic.
 */
function App() {
  // Centralized global state
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null); // null = not logged in

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Theme toggle
  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Authentication stubs
  // PUBLIC_INTERFACE
  const login = (userInfo) => {
    setUser(userInfo); // stub for login
  };
  // PUBLIC_INTERFACE
  const logout = () => {
    setUser(null);
  };
  const isAuthenticated = Boolean(user);

  return (
    <Router>
      {/* Navbar is rendered above all routes, needs user state and theme toggle */}
      <Navbar
        onToggleTheme={toggleTheme}
        theme={theme}
        isAuthenticated={isAuthenticated}
        onLogout={logout}
      />
      <MainLayout>
        <Routes>
          {/* Protected Home */}
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* Discover is protected */}
          <Route
            path="/discover"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Discover />
              </ProtectedRoute>
            }
          />
          {/* Device sync is protected */}
          <Route
            path="/devicesync"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DeviceSync />
              </ProtectedRoute>
            }
          />
          {/* Login always public */}
          <Route
            path="/login"
            element={
              isAuthenticated
                ? <Navigate to="/" replace />
                : <Login onLogin={login} />
            }
          />
          {/* Default fallback */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
