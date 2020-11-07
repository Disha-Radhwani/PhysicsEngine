//universe- Matter.Engine
//Planets(Earth)- Matter.World
//Humans- Matter.Bodies 

//giving namespaces
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine, world, ground,ball;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;

//json 
var options={

isStatic: true,
}
  

  ground= Bodies.rectangle(200,390,400,30,options);
  World.add(world,ground);

  var balloption={


    restitution: 1
  }
  ball= Bodies.circle(300,100,30,balloption);
  World.add(world,ball);

 
}





function draw() {
  background("black");
  Engine.update(engine);
   
 rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,30);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30)



}
