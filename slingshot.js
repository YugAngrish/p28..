class Slingshot{
constructor(bodyA,pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    length:10
}
this.chain = Constraint.create(options);
World.add(world,this.chain);
this.pointB = pointB
}
display(){
    push()
 if(this.chain.bodyA){
     var pointA = this.chain.bodyA.position;
     var pointB = this.pointB;
     
     strokeWeight(4);

     line(pointA.x,pointA.y,pointB.x,pointB.y)
     }
     pop();
 }   
 fly(){
     this.chain.bodyA = null;
 }
 attach(object){
     this.chain.bodyA = object;
 }
}
