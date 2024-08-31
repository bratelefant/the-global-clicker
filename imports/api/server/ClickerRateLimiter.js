import { DDPRateLimiter } from "meteor/ddp-rate-limiter";

DDPRateLimiter.addRule(
  {
    type: "method",
    name: "globalClick",
  },
  15,
  1000
);
