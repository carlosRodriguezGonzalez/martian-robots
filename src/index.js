const Grid = require("./grid");
const Robot = require("./robot");

const instructions =
  "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
instructionsSplit = instructions.split("\n");

gridSplit = instructionsSplit.shift().split(" ");

let grid = new Grid(gridSplit[0], gridSplit[1]);

let robots = [];

while (instructionsSplit.length > 0) {
  robotCoords = instructionsSplit.shift().split(" ");
  let robot = new Robot(robotCoords[0], robotCoords[1], robotCoords[2]);
  robots.push(robot);
  let actions = instructionsSplit.shift();

  grid.visitedCoord(robot.position);

  for (const action of actions) {
    robot.action(action);

    if (grid.isOutTheGrid(robot.position)) {
      robot.goBack();
      if (!grid.isScentCoord(robot.position)) {
        grid.scentCoord(robot.position);
        robot.changeStatus("LOST");
        break;
      }
    }

    grid.visitedCoord(robot.position);
  }
  console.log(robot.showPosition());
  robots.push(robot);
}
