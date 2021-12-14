import { Layer } from "../managers/Layer.js";
import { NewMediaManager } from "../managers/NewMediaManager.js";
import { DurationPowerup } from "./DurationPowerup.js";

export class DoublePointsPowerup extends DurationPowerup {
    constructor(xLocation, yLocation) {
        super(xLocation, yLocation, Layer.DURATION_POWERUP, 15, 16, NewMediaManager.Sprites.DoublePoints, 8, 0, 60 * 90, 'doublePointsActive');
    }

    activate(playerShip) {
        playerShip.scoreMultiplier = 2;
        document.getElementById(this.documentElementId).style.visibility = "visible";
    }

    deactivate(playerShip) {
        playerShip.scoreMultiplier = 1;
        document.getElementById(this.documentElementId).style.visibility = "hidden";
    }
}