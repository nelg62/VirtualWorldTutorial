class Stop {
  constructor(center, directionVector, width, height) {
    this.center = center;
    this.directionVector = directionVector;
    this.width = width;
    this.height = height;

    this.support = new getNearestSegment(
      translate(center, angle(directionVector), height / 2),
      translate(center, angle(directionVector), -height / 2)
    );
  }

  draw(ctx) {
    this.support.draw(ctx);
  }
}
