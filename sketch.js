
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot , rock , tree , boy;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10;
var gb1,gb2,gb3,gb4,gb5,gb6,gb7,gb8,gb9,gb10,gb11,gb12,gb13,gb14,gb15,gb16,gb17,gb18,gb19,gb20;;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("1.jpg")
}
function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   rock = new Rock(240,540)
  // World.add(world,rock)
  slingshot = new Slingshot(this.rock.object,{x:240,y:540})

  tree = new Tree(700,400)

  boy = new Kid(300,550)

  m1 = new Mango(600,430)
  m2 = new Mango(580,300)
  m3 = new Mango(680,300)
  m4 = new Mango(700,430)
  m5 = new Mango(720,350)
  m6 = new Mango(800,350)
  m7 = new Mango(640,340)
  m8 = new Mango(800,420)
  m9 = new Mango(580,370)
  m10 = new Mango(770,300)

  g1 = new Ground(600,455,5)
  g2 = new Ground(580,325,5)
  g3 = new Ground(680,310,5)
  g4 = new Ground(700,455,5)
  g5 = new Ground(720,375,5)
  g6 = new Ground(800,375,5)
  g7 = new Ground(640,365,5)
  g8 = new Ground(800,445,5)
  g9 = new Ground(580,395,5)
  g10 = new Ground(770,325,5)

  gb1 = new GroundB(615,455,5)
  gb2 = new GroundB(585,455,5)
  gb3 = new GroundB(595,325,5)
  gb4 = new GroundB(565,325,5)
  gb5 = new GroundB(695,310,5)
  gb6 = new GroundB(665,310,5)
  gb7 = new GroundB(715,455,5)
  gb8 = new GroundB(685,455,5)
  gb9 = new GroundB(705,375,5)
  gb10 = new GroundB(735,375,5)

  gb11 = new GroundB(815,375,5)
  gb12 = new GroundB(785,375,5)
  gb13 = new GroundB(655,365,5)
  gb14 = new GroundB(625,365,5)
  gb15 = new GroundB(815,445,5)
  gb16 = new GroundB(785,445,5)
  gb17 = new GroundB(595,395,5)
  gb18 = new GroundB(565,395,5)
  gb19 = new GroundB(785,325,5)
  gb20 = new GroundB(755,325,5) 
 	Engine.run(engine);
  
}


function draw() {
  
  background(backgroundImg);

  Engine.update(engine)
  
  //rectMode(CENTER);
  drawSprites();
   tree.display()
 // slingshot.display()
 
 boy.display();
 
 rock.display();
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();
m8.display();
m9.display();
m10.display();

/*g1.display();
g2.display();
g3.display();
g4.display();
g5.display();
g6.display();
g7.display();
g8.display();
g9.display();
g10.display();

gb1.display();
gb2.display();
gb3.display();
gb4.display();
gb5.display();
gb6.display();
gb7.display();
gb8.display();
gb9.display();
gb10.display();
gb11.display();
gb12.display();
gb13.display();
gb14.display();
gb15.display();
gb16.display();
gb17.display();
gb18.display();
gb19.display();
gb20.display(); */

slingshot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(rock.object,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(rock.object)
  }
}
