import { KillableAiGameObject } from "../KillableAiGameObject.js";
import { Layer } from "../managers/Layer.js";
import { NewMediaManager } from "../managers/NewMediaManager.js";
import { ObjectManager } from "../managers/ObjectManager.js";
import { SludgerMineTest } from "./SludgerMine.js";

export class Sludger extends KillableAiGameObject {
    constructor(xLocation, yLocation, velocityX, velocityY, playerShip) {
        super(xLocation, yLocation, Layer.SLUDGER, 34, 31, 0, NewMediaManager.Sprites.Sludger, velocityX, velocityY, 16, 8, playerShip, 10, 10, 25);

        this.currentTicksInAnimationFrame = 0;
        this.NUMBER_OF_TICKS_BETWEEN_ANIMATION_FRAMES = 7;
        this.NUMBER_OF_ANIMATION_FRAMES = 15;

        this.numberOfTicksSinceSpawnedMine = 0;
        // A new mine should be spawned in every 5 seconds
        this.MINE_SPAWN_TIME = 5 * 60;
    }

    // TODO: Make object manager a static class...?
    updateState() {
        // Handle animation
        // TODO: This logic is the same as in the PlayerBase, make some sort of common function?
        this.currentTicksInAnimationFrame += 1;
        if (this.currentTicksInAnimationFrame >= NUMBER_OF_TICKS_BETWEEN_ANIMATION_FRAMES) {
            this.currentTicksInAnimationFrame = 0;
            this.spriteXOffset += this.width;
            if (this.spriteXOffset >= (this.width * NUMBER_OF_ANIMATION_FRAMES)) {
                this.spriteXOffset = 0;
            }
        }

        // Update position
        this.x += this.velocityX;
        this.y+= this.velocityY;

        // Spawn new sludger mines
        this.numberOfTicksSinceSpawnedMine++;
        if (this.numberOfTicksSinceSpawnedMine > this.MINE_SPAWN_TIME) {
            this.numberOfTicksSinceSpawnedMine = 0;
            let newSludgerMine = new SludgerMineTest(this.x, this.y, 0, 0, this.playerShipReference);
            ObjectManager.addObject(newSludgerMine, true);
        }
    }
}