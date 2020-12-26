// Making the alias for moduels
const { Engine, World, Bodies, Body } = Matter;

// bodies variables
var paper, bin, ground, paperImage, binImage, hoopImage;
var score = 0;

preload = () => {
  binImage = loadImage("dustbingreen.png");
  hoopImage = loadImage("hoop.png");
};

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  paper = new Paper(200, 300, 25);
  bin2 = new DustBin(600, 315, 10, 120);
  bin3 = new DustBin(705, 315, 10, 120);
  bin1 = new DustBin(650, 370, 100, 10);
  basket1 = new Basket(730, 190, 10, 90);

  ground = new Ground(200, height, width + 400, 70);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(51, 172, 255);
  //sun
  ellipseMode(RADIUS);
  noStroke();
  fill("yellow");
  ellipse(width / 2, height - 350, 100);

  //some Annotation
  textSize(34);
  textStyle(BOLD);
  fill("Orange");
  text("Shehraan's Physics Trash Throw", 140, height - 300);
  textSize(14);
  text(
    "Press DOWN_ARROW to reset the Paper Ball & UP_ARROW to launch the Paper ball",
    130,
    height - 250
  );
  ground.show();
  image(hoopImage, 670, 190, 50, 50);
  paper.show();
  bin1.show();
  bin2.show();
  bin3.show();
  basket1.show();
  image(binImage, 590, 250, 130, 130);
  fill(255);
  rect(745, 195, 50, 10);
  rect(765, 280, 10, 180);
}

// aplying froce and throwingt he paper
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 105,
      y: -105,
    });
  }
  if (keyCode === DOWN_ARROW) {
    World.remove(world, paper.body);
    paper = new Paper(200, 300, 25);
  }
}

//Scoring System
// if (paper.collide(bin1) || paper.collide(bin2) || paper.collide(bin3)) {
//   let r = floor(random(4));
//   switch (r) {
//     case 0:
//       score = score + 3;
//       break;
//     case 1:
//       score = score + 5;
//       break;
//     case 2:
//       score = score + 10;
//       break;
//     case 3:
//       score = score + 4;
//       break;
//     default:
//       break;
//       console.log(r);
//   }
// }
// // score bourd
// fill("white");
// rect(400, 200, 200, 100);
// textStyle(BOLD);
// textSize(44);
// fill("Blue");
// text("Score: " + score, 320, 210);
