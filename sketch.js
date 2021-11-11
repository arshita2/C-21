
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	var balls = {isStatic: false, restitution: 0.3, friction: 0, density: 1.2}
	ball = Bodies.circle(200, 400, 20, balls)
	World.add(world, ball)
	
	var option = {isStatic: true}
	ground = Bodies.rectangle(400, 680, 800, 20, option)
	World.add(world, ground)

	left = Bodies.rectangle(600, 620, 10, 90, option)
	World.add(world, left)

	right = Bodies.rectangle(700, 620, 10, 90, option)
	World.add(world, right)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 20, 20)
  rect(ground.position.x, ground.position.y, 800, 20)
  rect(left.position.x, left.position.y, 10, 90 )
  rect(right.position.x, right.position.y, 10, 90)
  
   if(keyCode===UP_ARROW) {
   Matter.Body.applyForce(ball, ball.position, {x: 30, y:-10})

   }

  drawSprites();
 
}



