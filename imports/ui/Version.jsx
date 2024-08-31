import React from "react";
import version from "../version.json"

const styles = {
  version: {
    textAlign: "left",
    color: "white",
    margin: 10,
  },
};

export const Version = () => {
  return <p style={styles.version}>v{version.number}</p>;
};
