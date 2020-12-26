class DustBin {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke();
    fill("white");
    rect(0, 0, this.w, this.h);
    pop();
  }
}
