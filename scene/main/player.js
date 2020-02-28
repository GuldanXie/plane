class Player extends GuaImage{
	constructor(game){
		super(game,'player')
		this.setup()
	}
	setup(){
		this.speed=10
		this.cooldown=0
	}
	update(){
		this.speed=config.player_speed
		if(this.cooldown>0){
			this.cooldown--
		}
	}
	moveLeft(){
		this.x-=this.speed
	}
	moveRight(){
		this.x+=this.speed
	}
	moveUp(){
		this.y-=this.speed
	}
	moveDown(){
		this.y+=this.speed
	}
	fire(){
		if(this.cooldown==0){
			this.cooldown=5
			var x=this.x+this.w/2
			var y=this.y
			var b=new Bullet(this.game)
			b.x=x
			b.y=y
			this.scene.addElement(b)
		}
		

	}

}