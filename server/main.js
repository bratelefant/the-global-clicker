import { Meteor } from "meteor/meteor";
import { ClickerCollection } from "../imports/api/ClickerCollection";
import "../imports/api/server/ClickerRateLimiter";
import "../imports/api/ClickerApi";

Meteor.startup(async () => {
  const globalClicker = await ClickerCollection.findOneAsync({
    name: "Global Clicker",
  });

  if (!globalClicker) {
    await ClickerCollection.insertAsync({ name: "Global Clicker", count: 0 });
  }
});
