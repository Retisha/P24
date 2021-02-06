
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){ 
	paperImg = loadImage('paper.png')
	dustbingreenImg = loadImage('dustbingreen.png')
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
 paperObject = new Paper(30,350,20);
 console.log(paperObject.body.position)
	Engine.run(engine);
  
}
 

function draw() {
  rectMode(CENTER);
  background(0);
 
paperObject.display();
  groundObject.display();
  dustbinObj.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log('keyPressed')
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:165,y:-165}	)
		
	}
}

