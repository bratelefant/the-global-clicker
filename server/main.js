import { Meteor } from "meteor/meteor";
import { ClickerCollection } from "../imports/api/ClickerCollection";
import "../imports/api/ClickerApi";
import "../imports/api/server/ClickerRateLimiter";

Meteor.startup(async () => {
  /**
   * Create a global clicker if it doesn't exist
   */
  const globalClicker = await ClickerCollection.findOneAsync({
    name: "Global Clicker",
  });

  if (!globalClicker) {
    await ClickerCollection.insertAsync({ name: "Global Clicker", count: 0 });
  }
});
