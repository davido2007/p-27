
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(70,640,4);
	bobObject2=new Bob(100,640,4)
	bobObject3=new Bob(130,640,4);
	bobObject4=new Bob(160,640,4);
	bobObject5=new Bob(190,640,4);

	rope1=new rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	rope2=new rope(bobObject2.body,roof.body,-bobDiameter*2,0)
	rope3=new rope(bobObject3.body,roof.body,-bobDiameter*2,0)
	rope4=new rope(bobObject4.body,roof.body,-bobDiameter*2,0)
	rope5=new rope(bobObject5.body,roof.body,-bobDiameter*2,0)

	roof = new Roof(400,100,650,50);
    roof.shapeColor=color(54,63,63);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
 bobObject5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}

function upArrowKey(){
	if(keyCode("UP")){
		bobObject1.velocityX=-1;
	}
}



