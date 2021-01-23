class Rock{
constructor(x,y){
var options = {
 restitution:1,
 
 friction:1,
 density:2   
}
this.object=Bodies.rectangle(x,y,50,50,options)
this.width = 50
this.height = 50
this.image = loadImage("r.png")
World.add(world,this.object)
}   
display(){
   
   push(); 
   
imageMode(CENTER)
//rect(this.object.position.x,this.object.position.y,this.width,this.height)
image(this.image,this.object.position.x,this.object.position.y,50,50)
pop();
} 
}