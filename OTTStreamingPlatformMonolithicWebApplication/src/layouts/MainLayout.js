import React from "react";
import Navbar from "../components/Navbar";

/**
 * PUBLIC_INTERFACE
 * MainLayout wraps all pages with consistent navigation and content layout.
 * @param {object} props - React children to render.
 */
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight: "calc(100vh - 60px)", // leave space for navbar
        padding: "1rem", 
        background: "var(--bg-primary)", 
        color: "var(--text-primary)"
      }}>
        {children}
      </main>
    </>
  );
}

export default MainLayout;
