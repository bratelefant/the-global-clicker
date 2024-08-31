import { ClickerCollection } from "./ClickerCollection";

/**
 * Methods
 */
Meteor.methods({
  globalClick: async () => {
    await ClickerCollection.updateAsync(
      { name: "Global Clicker" },
      { $inc: { count: 1 } }
    );
  },
});
