import React, { useState } from "react";

export const ClickerButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    userSelect: "none",
    border: "none",
    background: "none",
    padding: 0,
    cursor: "pointer",
  };

  const imageStyle = {
    userSelect: "none",
    width: "300px",
    height: "auto",
    transition: "transform 0.2s ease-in-out",
    transform: isClicked ? "scale(1.3)" : isHovered ? "scale(1.1)" : "scale(1)",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 80);
        onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="pixilart-drawing.png" alt="Button Image" style={imageStyle} />
    </button>
  );
};
