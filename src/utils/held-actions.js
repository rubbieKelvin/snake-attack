export class HeldAction{
	constructor(threshold, trigger){
		this.thresholdMax = threshold
		this.thresholdValue = 0
		this.trigger = trigger || (() => {})
	}

	update(time, delta){
		if (this.thresholdValue > this.thresholdMax){
			this.trigger()
			this.thresholdValue = 0
		}else{
			this.thresholdValue += Math.floor(delta)
		}
	}
}