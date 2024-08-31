import React from "react";

const styles = {
  loadingContainerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loadingTextStyle: { color: "white" },
};

export const Loading = () => {
  return (
    <div style={styles.loadingContainerStyle}>
      <div>
        <p style={styles.loadingTextStyle}>Loading...</p>
      </div>
    </div>
  );
};
