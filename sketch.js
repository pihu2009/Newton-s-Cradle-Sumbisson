const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies
const Render= Matter.Render;
const constraint= Matter.Constraint
const Body=Matter.Body

var myengine
var myworld

function preload()
{

}

function setup()
{
createCanvas(1800,700)


myengine= Engine.create();          
myworld=myengine.world; 



roof = new Box(900,250,400,20)
ball1 = new Ball(720,500,30)
ball2 = new Ball(800,500,30)
ball3 = new Ball(880,500,30)
ball4 = new Ball(960,500,30)
ball5 = new Ball(1040,500,30)
rope1 = new Attach(ball1.body,{x:720,y:250})
rope2 = new Attach(ball2.body,{x:800,y:250})
rope3 = new Attach(ball3.body,{x:880,y:250})
rope4 = new Attach(ball4.body,{x:960,y:250})
rope5 = new Attach(ball5.body,{x:1040,y:250})


}

function draw()
{

Engine.update(myengine)   
background("lightgreen")

rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()

roof.display()
fill("black")
textSize(30)
text("Press 'Space' ",820,220)

}

function keyPressed()
{
if(keyCode===32)
{
 Body.applyForce(ball1.body,ball1.body.position,{x:-120,y:-120})
}

}


























































