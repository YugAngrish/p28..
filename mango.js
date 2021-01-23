class Mango{
    constructor(x,y){
    var options = {
     restitution:0,
    // isStatic:true,
     friction:1,
     density:2   
    }
    this.object=Bodies.rectangle(x,y,50,50,options)
    this.width = 50
    this.height = 50
    this.image = loadImage("m.png")
    World.add(world,this.object)
   // this.visibility = 225;
    }   
    display(){
       push(); 
      // if(this.object.speed<10){
    imageMode(CENTER)
    image(this.image,this.object.position.x,this.object.position.y,this.width,this.height)
       //}
       /*else{
         this.visibility = this.visibility -5
         tint(225,(this.visibility))  
         World.remove(world,this.object)
       }*/
    pop();
    } 
    }