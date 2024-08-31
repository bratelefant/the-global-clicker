import React from "react";
import { Version } from "./Version";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  const footerContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "baseline",
    alignItems: "center",
    gap: "10px",
    fontFamily: "sans-serif",
    fontSize: 11,
  };

  const linkContainerStyle = {
    fontFamily: "sans-serif",
    fontSize: 11,
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <Version />
        <div style={linkContainerStyle}>
          <a href="/legal.html" style={{ color: "green", marginInline: 10 }}>
            Legal Notice
          </a>
          <a href="/privacy.html" style={{ color: "green", marginInline: 10 }}>
            Privacy Statement
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
