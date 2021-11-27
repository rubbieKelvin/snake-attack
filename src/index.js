import Phaser from "phaser";
import {GameScene} from "./scenes/game.js"

let game

window.addEventListener('load', () => {
	game = new Phaser.Game({
		type: Phaser.AUTO,
		scene: GameScene,
		width: window.innerWidth,
		height: window.innerHeight,
		canvasStyle: "position: fixed;",
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {y: 300, debug: true}
			}
		}
	});

	game.canvas.id = "canvas";
})

window.addEventListener("resize", () => {
	const canvas = document.getElementById("canvas")
	if (canvas){
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
	}
})