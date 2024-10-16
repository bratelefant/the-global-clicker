import { Meteor } from "meteor/meteor";
import { ClickerCollection } from "../imports/api/ClickerCollection";
import "../imports/api/ClickerApi";
import "../imports/api/server/ClickerRateLimiter";
import version from "../imports/version.json";
import { initRateLimiters } from "../imports/api/server/ClickerRateLimiter";

Meteor.startup(async () => {
  Meteor._debug(
    "Starting up the ultimate global clicker server, version " + version.number
  );
  /**
   * Create a global clicker if it doesn't exist
   */
  const globalClicker = await ClickerCollection.findOneAsync({
    name: "Global Clicker",
  });

  if (!globalClicker) {
    await ClickerCollection.insertAsync({ name: "Global Clicker", count: 0 });
  }

  initRateLimiters();
});
