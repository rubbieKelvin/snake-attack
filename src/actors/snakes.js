import Phaser from "phaser"
import { rare } from "../utils/helpers.js"
import {level, maxSnakeSpeed} from "../utils/settings.js"

/**
 * @type {Array<Snake>}
 */
const snake_list = []

export class Snake{
	/**
	 * 
	 * @param {Phaser.Scene} scene 
	 * @param {Phaser.Physics.Arcade.Group} group 
	 */
	constructor(scene, group){
		this.randomFactor = Math.random() // random valu to be used by this object througout

		let x = window.innerWidth + 100
		let y = Math.floor(this.randomFactor*window.innerHeight)

		this.scene = scene
		this.alive = true
		this.group = group || null

		this.angry = false
		this.bossLevel = rare()
		this.sprite = this.scene.physics.add.sprite(x, y, "snake")

		if (this.group) this.group.add(this.sprite)

		this.sprite.setScale(this.bossLevel ? .6 : .4)
		this.sprite.setBounce(.4)
		this.sprite.setVelocityX(-this.randomFactor*(maxSnakeSpeed * level))
		this.sprite.body.setAllowGravity(false)

		snake_list.push(this)
	}

	tryGettingAngry(){
		if (!this.bossLevel && !this.angry && rare() && this.alive){
			this.angry = true
			this.sprite.setScale(.6)
			this.sprite.setTint(0xff0000)
			this.sprite.body.setVelocityX(-maxSnakeSpeed)
		}
	}

	update(){
		if (this.sprite.x < -this.sprite.width){
			this.alive = false
			this.group.remove(this.sprite, true, true)
		}
	}

	/**
	 * 
	 * @returns {Array<Snake>}
	 */
	static getSnakes() {
		return snake_list.filter(_=>_)
	}
}