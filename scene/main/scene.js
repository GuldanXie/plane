class Scene extends GuaScene{
  constructor(game) {
    super(game)
    this.setup()
    this.setupInputs()
  }
  
  setupInputs(){
    var g=this.game
    var t=this
    g.registerAction('a',function(){
      t.player.moveLeft()
    })
    g.registerAction('d',function(){
      t.player.moveRight()
    })
    g.registerAction('w',function(){
      t.player.moveUp()
    })
    g.registerAction('s',function(){
      t.player.moveDown()
    })
    g.registerAction('k',function(){
      t.player.fire()
    })
  }

  setup(){
    this.numberOfEnemies=10
    this.bg=new GuaImage(this.game,'bg')
    // this.player=new GuaImage(this.game,'player')
    // this.player.x=100
    // this.player.y=150
    this.clound=new Cloud(this.game)
    this.bullet=new GuaImage(this.game,'bullet')

    this.player=new Player(this.game)
    this.player.x=100
    this.player.y=500
  
    this.addElement(this.bg)
    
    this.addElement(this.clound)
    this.addElement(this.player)
    this.addEnemies()
  }
  addEnemies(){
    var es=[]
    for(var i=0;i<this.numberOfEnemies;i++){
      var e=new Enemy(this.game)
      es.push(e)
      this.addElement(e)

    }
    this.enemies=es
  }


  update () {
    super.update()
    this.clound.y+=1
  }  
}
