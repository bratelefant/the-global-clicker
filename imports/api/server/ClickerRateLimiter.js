import { DDPRateLimiter } from "meteor/ddp-rate-limiter";

/**
 * Limit the number of clicks per second to 15
 * to prevent abuse
 */
Meteor.startup(() => {
  console.log("Setting up rate limiter for globalClick");
  DDPRateLimiter.addRule(
    {
      type: "method",
      name: "globalClick",
    },
    15,
    1000
  );
});