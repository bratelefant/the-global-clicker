import { ClickerCollection } from "./ClickerCollection";

/**
 * Isomorphic Methods for the Clicker API
 * This can be called from the client or server and
 * implements optimistic UI updates.
 *
 * i.e. The client will update the UI before the server
 * has confirmed the update. This is a good practice for
 * a responsive UI.
 */
Meteor.methods({
  /**
   * Increment the global clicker
   */
  globalClick: async () => {
    ClickerCollection.updateAsync(
      { name: "Global Clicker" },
      { $inc: { count: 1 } }
    );
  },
});
