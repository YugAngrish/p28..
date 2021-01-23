class Ground{
    constructor(x,y,width){
    var options = {
     isStatic:true,
     friction:1,
     density:2   
    }
    this.object=Bodies.rectangle(x,y,width,5,options)
    this.width = 30
    this.height = 0.000000000000001
    World.add(world,this.object)
   this.object.visible = false
   
   
    }   
    display(){
       push();
    
      
    rectMode(CENTER)
    rect(this.object.position.x,this.object.position.y,this.width,this.height)
       
    pop();
    } 
    }