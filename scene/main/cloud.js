class Cloud extends GuaImage{
	constructor(game){
		
		
		super(game,'clound')
		this.setup()
		
	}
	setup(){
		this.speed=config.cloud_speed
		this.x=randomBetween(0,350)
		this.y=-randomBetween(0,200)
	}
	update(){
		this.y+=this.speed
		if(this.y>600){
			this.setup()
		}
	}
	

}