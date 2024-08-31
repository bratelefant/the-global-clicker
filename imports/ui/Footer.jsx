import React from "react";
import { Version } from "./Version";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "baseline",
          alignItems: "center",
          gap: "10px",
          fontFamily: "sans-serif",
          fontSize: 11,
        }}
      >
        <Version />
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 11,
          }}
        >
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
