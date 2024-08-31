import React from "react";

const styles = {
  text: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    color: "#ff9999",
  },
};

export const ErrorMsg = ({ children }) => {
  return <p style={styles.text}>{children}</p>;
};
