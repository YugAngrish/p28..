class Tree{
    constructor(x,y){
    var options = {
     //restitution:0,
     isStatic:true,
     friction:1,
     density:2   
    }
    this.object=Bodies.rectangle(x,y,50,50,options)
    this.width = 350
    this.height = 350
    this.image = loadImage("t.png")
    //World.add(world,this.object)
    }   
    display(){
       push(); 
    imageMode(CENTER)
    image(this.image,this.object.position.x,this.object.position.y,this.width,this.height)
    pop();
    } 
    }