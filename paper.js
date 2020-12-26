class Paper {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r / 2 + 15;
    this.img = loadImage("paper.png");
    World.add(world, this.body);
  }
  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke();
    fill(225, 198, 153);
    image(this.img, 0, 0, this.r, this.r);
    pop();
  }
}
