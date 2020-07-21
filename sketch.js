var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box1sprite,box2sprite,box3sprite;
var packageBody,ground,box1,box2,box3;
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

	box1sprite=createSprite(390,650,200,20);
	box1sprite.shapeColor="red";

	box2sprite=createSprite(295,610,20,100);
	box2sprite.shapeColor="red";

	box3sprite=createSprite(485,610,20,100);
	box3sprite.shapeColor="red";

	
	engine = Engine.create();
	world = engine.world;

 	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true},{restitution:0.7});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	 var box_options={
		isStatic:true,
	} 
	
	box1 = Bodies.rectangle(390,650,200,20,box_options);
	World.add(world,box1);

	box2 = Bodies.rectangle(295,610,20,100,box_options);
	World.add(world,box1);

	box3= Bodies.rectangle(485,610,20,100,box_options);
	World.add(world,box1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
packageBody.display();
ground.display();


  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y;
	

  }
}



