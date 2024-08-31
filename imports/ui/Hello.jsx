import React, { useState } from "react";
import { ClickerCollection } from "../api/ClickerCollection";
import { useTracker } from "meteor/react-meteor-data";
import { ClickerButton } from "./ClickerButton";
import "../api/ClickerApi";

export const Hello = () => {
  const [meineClicks, setMeineClicks] = useState(0);
  const [errMsg, setErrMsg] = useState();

  const clicker = useTracker(() =>
    ClickerCollection.findOne({ name: "Global Clicker" })
  );

  const onClick = async () => {
    setErrMsg(undefined);

    Meteor.callAsync("globalClick").catch((error) => {
      console.warn(error);
      if (error.error === "too-many-requests") {
        setErrMsg("Are you cheating? You're so fast... ;)");
      }
    });
    setMeineClicks(meineClicks + 1);
  };

  if (!clicker) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <p style={{ color: "white" }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", flex: 1 }}>
      <h1 style={{ color: "white" }}>{clicker.name}</h1>
      <p
        style={{ fontSize: 21, color: "white", lineHeight: "1.2", margin: "0" }}
      >
        Global clicks: {clicker.count}{" "}
      </p>
      <p style={{ color: "white", lineHeight: "1.2", margin: "0" }}>
        Your clicks: {meineClicks} .
      </p>
      <ClickerButton onClick={onClick} />
      {errMsg && (
        <p
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            color: "#ff9999",
          }}
        >
          {errMsg}
        </p>
      )}
    </div>
  );
};
