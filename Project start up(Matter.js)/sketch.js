const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

var roof, bob, rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(300, 350);
	rope = new Rope(bob.body, {x: 350, y: 350});
	bob1 = new Bob(365, 350);
	rope1 = new Rope(bob1.body, {x: 365, y: 350});
	roof = new Roof(350, 350, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob.display();
  rope.display();
  bob1.display();
  rope1.display();
  roof.display();

  drawSprites();
 
}



