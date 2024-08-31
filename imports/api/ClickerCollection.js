import { Mongo } from "meteor/mongo";

/**
 * Create a new Mongo collection to store the number of clicks
 */
export const ClickerCollection = new Mongo.Collection("clicker");
