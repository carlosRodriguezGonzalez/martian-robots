const Grid = require("../models/grid");
const Robot = require("../models/robot");
const GridDatabase = require("../database/grid.database");

const exploreWorld = async (req, res) => {
  const { data } = req.body;

  instructionsSplit = data.split("\n");

  gridSplit = instructionsSplit.shift().split(" ");

  let grid = new Grid(gridSplit[0], gridSplit[1]);

  let robots = [];

  let responseData = [];

  while (instructionsSplit.length > 0) {
    robotCoords = instructionsSplit.shift().split(" ");
    let robot = new Robot(robotCoords[0], robotCoords[1], robotCoords[2]);
    robots.push(robot);
    let actions = instructionsSplit.shift();

    grid.addVisitedCoord(robot.position);

    for (const action of actions) {
      robot.doAction(action);

      if (grid.isOutTheGrid(robot.position)) {
        robot.goBack();
        if (!grid.isScentCoord(robot.position)) {
          grid.addScentCoord(robot.position);
          robot.changeStatus("LOST");
          break;
        }
      }

      grid.addVisitedCoord(robot.position);
    }
    console.log(robot.showPosition());
    responseData.push(robot.showPosition());
    robots.push(robot);
  }
  const gridDatabase = new GridDatabase({ worldExplore: grid.world });
  await gridDatabase.save();
  res.send(responseData);
};

module.exports = { exploreWorld };
