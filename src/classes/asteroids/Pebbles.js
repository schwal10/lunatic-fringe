import { NewMediaManager } from "../managers/NewMediaManager.js";
import { Asteroid } from "./Asteroid.js";

export class Pebbles extends Asteroid {
    constructor(xLocation, yLocation, velocityX, velocityY) {
        /**
         * The width, height, angle (which doesn't really apply), sprite, collisionRadius, and mass are always the same for a Pebbles.
         */
        super(xLocation, yLocation, 25, 26, 0, NewMediaManager.Sprites.Pebbles, velocityX, velocityY, 13, 100, 30);
        // TODO: Pebbles apparently can go up to 3 times faster than Rocko, so account for that when it is created with the velocity!
    }
}