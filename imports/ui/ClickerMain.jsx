import React, { useState } from "react";
import { ClickerCollection } from "../api/ClickerCollection";
import { useTracker } from "meteor/react-meteor-data";
import { ClickerButton } from "./ClickerButton";
import "../api/ClickerApi";
import { Headline } from "./Headline";
import { ClickCounter } from "./ClickCounter";
import { Loading } from "./Loading";
import { ErrorMsg } from "./ErrorMsg";

const styles = {
  mainContainer: { fontFamily: "sans-serif", textAlign: "center", flex: 1 },
};

export const ClickerMain = () => {
  const [myClicks, setMyClicks] = useState(0);
  const [errMsg, setErrMsg] = useState();

  const clicker = useTracker(() =>
    ClickerCollection.findOne({ name: "Global Clicker" })
  );

  const onClick = async () => {
    setErrMsg(undefined);

    Meteor.callAsync("globalClick")
    .catch((error) => {
      console.warn(error);
      if (error.error === "too-many-requests") {
        setErrMsg("Are you cheating? You're so fast... ;)");
      }
    });
    setMyClicks((prev) => prev + 1);
  };

  if (!clicker) {
    return <Loading />;
  }

  return (
    <div style={styles.mainContainer}>
      <Headline>{clicker.name}</Headline>
      <ClickCounter count={clicker.count} label="Global Clicks" />
      <ClickCounter count={myClicks} label="Your Clicks" />
      <ClickerButton onClick={onClick} />
      {errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
    </div>
  );
};
