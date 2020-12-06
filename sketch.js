const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(200,100,200,20);

	bob1 = new Ball(119,300,40);
	bob2 = new Ball(159,300,40);
	bob3 = new Ball(200,300,40);
	bob4 = new Ball(241,300,40);
	bob5 = new Ball(282,300,40);

	chain1 = new Chain(bob1.body, roof.body, 100, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  chain1.display();
 
}



