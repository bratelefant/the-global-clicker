import React from "react";

const styles = {
  text: { fontSize: 21, color: "white", lineHeight: "1.2", margin: "0" },
};

export const ClickCounter = ({ count, label = "Clicks" }) => {
  return (
    <p style={styles.text}>
      {label}: {count}{" "}
    </p>
  );
};
