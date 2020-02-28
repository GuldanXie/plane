class Bullet extends GuaImage{
	constructor(game){
		super(game,'bullet')
		this.setup()
		
	}
	setup(){
		this.speed=12
		
	}
	update(){
		this.y-=this.speed
	}

	

}