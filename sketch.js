const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , ground2 ; 
var block8  , block8 , block9 , block10 , block11 , block12 , block13 , block14 , block15 , block16 ; 
var polygon , slingshot ; 
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground (400 , 400 , 800 , 50);
  ground2 = new Ground (400, 300 , 200 , 20);
  block8 = new Box (330 , 235 ,30,40);
  block9 = new Box (360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
  ground.display();
  ground2.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
}

/*
Make a copy of the following files created in the Angry birds game in the class:
Ground JavaScript file.
Box JavaScript file.
Slingshot JavaScript
Add these files to your project and add these file names to index.html.
In sketch.js, create an object using Ground Class.
Create an object for the Stand (which is the base to hold the blocks) using the same Ground Class.
Create multiple objects using the Box Class and stack them in a way that the structure looks like a pyramid.
Here is an example of of the code snippet for creating this structure:

Create an object called Polygon using Bodies and add it to the world.
Add an image to the polygon object using the concepts taught in class C25. (See Hints on how to do this.)
Link the Polygon (bodyA) to the Slingshot Class with a pointB
Adjust the position of the Polygon such that it is aimed at the pyramid at a certain distance from the stand.
Add the mouseDragged and mouseReleased events in the sketch.js to launch the Polygon on the pyramid.
Update the fly() method to set the bodyA to null.
Make sure the project works before you submit it.
*Refer to the images given above for reference.

Submitting the Project:
Upload your completed project to your own github account.
Create a new repository named “Project 29”
Upload working code to this github repository.
Enable Github pages for the repository.
Copy the link to the github pages link in the Student Dashboard.
Hints:
Create the Polygon using Bodies.
There are many types of Bodies to give shape.
Refer to the link: https://brm.io/matter-js/docs/classes/Bodies.html
Here is one example for you:

When adding images, ensure your imageMode is CENTER.
For reference: https://p5js.org/reference/#/p5/image

*Note: mouseDragged and mouseReleased are the default, they need not be called so feel free to experiment with its functionality.

Links for reference:

https://p5js.org/reference/#/p5/mousePressed
https://p5js.org/reference/#/p5/mouseDragged
Start Your Project

Read all the instructions carefully to understand the project

Click on "Start Project" to go to the project playground and start your project
Start Project
Submit Your Project
Learn how to submit your projectvideo
Paste your project URL
Submit Project
Class Summary
This project is based on your last class PRO-C29
*/