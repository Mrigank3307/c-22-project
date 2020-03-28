const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var allboxes = [];

var slider;
var g;

function setup () {
    var canvas = createCanvas (400,400) 
    engine = Engine.create()
    world = engine.world;

    slider = createSlider (0,100,50);
    slider.position (40,40);
  

    slider.input = map(engine.world.gravity, slider.min, slider.max, 0, 1);

    ground = new Ground (200,400,400,1);

 
}

function mousePressed() {
    if (mouseY < 400) {
        allboxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
    }
}


function draw() {
    background ("white")
    var g = slider.value();

    textSize (20);
    text ("gravity " + g ,200,200);

  Engine.update(engine);

  for (var i = 0; i < allboxes.length; i++) {
    allboxes[i].display();
}
  
    
 // box1.display();
    ground.display();
}

