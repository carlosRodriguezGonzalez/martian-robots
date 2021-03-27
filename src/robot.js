const Position = require("./position");

class Robot {
  constructor(x, y, facing) {
    this.position = new Position(x, y, facing);
    this.status = "waiting";
  }

  showPosition = () => {
    return (
      `${this.position.x} ${this.position.y} ${this.position.facing}` +
      (this.status === "LOST" ? " LOST" : "")
    );
  };

  action = (action) => {
    switch (action) {
      case "L":
        this.rotateLeft();
        break;
      case "R":
        this.rotateRight();
        break;
      case "F":
        this.goAhead();
        break;

      default:
        break;
    }
  };
  rotateLeft = () => {
    const rotation = { N: "W", W: "S", S: "E", E: "N" };
    this.position.facing = rotation[this.position.facing];
  };
  rotateRight = () => {
    const rotation = { N: "E", E: "S", S: "W", W: "N" };
    this.position.facing = rotation[this.position.facing];
  };

  goAhead = () => {
    switch (this.position.facing) {
      case "N":
        this.position.y += 1;
        break;
      case "E":
        this.position.x += 1;
        break;
      case "S":
        this.position.y -= 1;
        break;
      case "W":
        this.position.x -= 1;
        break;

      default:
        break;
    }
  };
  goBack = () => {
    switch (this.position.facing) {
      case "N":
        this.position.y -= 1;
        break;
      case "E":
        this.position.x -= 1;
        break;
      case "S":
        this.position.y += 1;
        break;
      case "W":
        this.position.x += 1;
        break;

      default:
        break;
    }
  };

  changeStatus = (status) => {
    this.status = status;
  };
}

module.exports = Robot;
