const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1000,400)
    engine = Engine.create()
    world = engine.world
    poly1 = new Box(150,240,50,50)
    ground = new Ground(600,height,1200,10)
    base1 = new Ground(447,330,230,10)
    base2 = new Ground(745,200,150,10)
    chain = new SlingShot(poly1.body, {x : 150, y : 240})
    block1 = new Block(350,316,30,30)
    block2 = new Block(380,316,30,30)
    block3 = new Block(410,316,30,30)
    block4 = new Block(440,316,30,30)
    block5 = new Block(470,316,30,30)
    block6 = new Block(500,316,30,30)
    block7 = new Block(530,316,30,30)
    block8 = new Block(380,280,30,30)
    block9 = new Block(410,280,30,30)
    block10 = new Block(440,280,30,30)
    block11 = new Block(470,280,30,30)
    block12 = new Block(410,250,30,30)
    block13 = new Block(440,250,30,30)
    block14 = new Block(470,250,30,30)
    block15 = new Block(500,280,30,30)
    block16 = new Block(440,225,30,30)
    block17 = new Block(780,185,30,30)
    block18 = new Block(690,185,30,30)
    block19 = new Block(720,185,30,30)
    block20 = new Block(750,185,30,30)
    block21 = new Block(810,185,30,30)
    block22 = new Block(720,150,30,30)
    block23 = new Block(750,150,30,30)
    block24 = new Block(780,150,30,30)
    block25 = new Block(750,120,30,30)


}

function draw(){
    background("black")
    Engine.update(engine);
    strokeWeight(4);
    ground.display()
    base1.display()
    base2.display()
    chain.display()
    poly1.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()
    push()
    text(mouseX +"," + mouseY,mouseX,mouseY)
    text("Press Space to play again",170,65)
    pop()
}

function mouseDragged(){
	Matter.Body.setPosition(poly1.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
if (keyCode === 32){
	chain.attach(poly1.body);
}
}