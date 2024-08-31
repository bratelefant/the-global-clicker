import { DDPRateLimiter } from "meteor/ddp-rate-limiter";

/**
 * Limit the number of clicks per second to 15
 * to prevent abuse
 */
export function initRateLimiters() {
  Meteor._debug("Setting up rate limiters for globalClick");

  DDPRateLimiter.addRule(
    {
      type: "method",
      name: "globalClick",
    },
    15,
    1000
  );
}
