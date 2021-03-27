const Position = require("./position");

class Robot {
  constructor(x, y, facing) {
    this.position = new Position(x, y, facing);
    this.status = "WAITING";
    this.speed = 1;
  }

  showPosition = () => {
    return `${this.position.x} ${this.position.y} ${this.position.facing}${
      this.status === "LOST" ? " LOST" : ""
    }`;
  };

  doAction = (action) => {
    switch (action) {
      case "L":
      case "R":
        this.rotate(action);
        break;
      case "F":
        this.goAhead();
        break;

      default:
        break;
    }
  };

  rotate = (direction) => {
    const rotation = {
      L: { N: "W", E: "N", S: "E", W: "S" },
      R: { N: "E", E: "S", S: "W", W: "N" },
    };
    this.position.facing = rotation[direction][this.position.facing];
  };

  goAhead = () => {
    switch (this.position.facing) {
      case "N":
        this.position.y += this.speed;
        break;
      case "E":
        this.position.x += this.speed;
        break;
      case "S":
        this.position.y -= this.speed;
        break;
      case "W":
        this.position.x -= this.speed;
        break;

      default:
        break;
    }
  };
  goBack = () => {
    switch (this.position.facing) {
      case "N":
        this.position.y -= this.speed;
        break;
      case "E":
        this.position.x -= this.speed;
        break;
      case "S":
        this.position.y += this.speed;
        break;
      case "W":
        this.position.x += this.speed;
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
