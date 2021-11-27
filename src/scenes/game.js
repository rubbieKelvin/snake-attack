import Phaser from "phaser";
import {level, maxSnakeOnScreen} from "../utils/settings.js"
import SnakeImg from "../assets/png/snake.png"
import {HeldAction} from "../utils/held-actions.js"
import {Snake} from "../actors/snakes.js"

export class GameScene extends Phaser.Scene{
	preload(){
		this.load.image('snake', SnakeImg)
	}

	create(){
		const self = this
		this.snakeGroup = this.physics.add.group()

		/**
		 * @type {Array<HeldAction>}
		 */
		this.heldactions = [
			// get snakes angry
			new HeldAction(1000, ()=>{
				Snake.getSnakes().forEach(snake => {
					snake.tryGettingAngry()
				})
			}),

			// create snakes
			new HeldAction(2000, ()=>{
				if (this.snakeGroup.getLength() < maxSnakeOnScreen()){
					for (let i=0; i<(level*10)+3; i+=1){
						new Snake(this, this.snakeGroup)
					}
				}
			})
		]

		this.physics.add.collider(this.snakeGroup, this.snakeGroup)
	}

	update(time, delta){
		Snake.getSnakes().forEach(snake => snake.update())
		this.heldactions.forEach(heldaction => heldaction.update(time, delta))
	}
}