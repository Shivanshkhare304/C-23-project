	var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bin1Sprite = createSprite(250,height-90 , 20, 100);
	bin1Sprite.shapeColor = "red";

	bin2Sprite = createSprite(450,height-90 , 20, 100);
	bin2Sprite.shapeColor = "red";

	bin3Sprite = createSprite(350,height-40 , 180, 20);
	bin3Sprite.shapeColor = "green";

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true} );
	World.add(world, ground);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	bin1Body = Bodies.rectangle(200,height-90 , 20, 100 , {isStatic:true})
	World.add(world, bin1Body);

	bin2Body = Bodies.rectangle(500,height-90 , 20, 100, {isStatic:true} )
	World.add(world, bin2Body);
 
	bin3Body = Bodies.rectangle(200,height-40 , 180, 20, {isStatic:true} )
	World.add(world, bin3Body);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody , false);
    
  }
}