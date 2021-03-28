const Grid = require("../src/models/grid");
const Robot = require("../src/models/robot");

describe("Robot On the grid", () => {
  test("Yes ", () => {
    const grid = new Grid(20, 20);
    const robot = new Robot(1, 1, "S");

    expect(grid.isOutTheGrid(robot.position)).toBe(false);
  });
  test("No ", () => {
    const grid = new Grid(20, 20);
    const robot = new Robot(21, 21, "S");
    robot.changeStatus("LOST");
    expect(grid.isOutTheGrid(robot.position)).toBe(true);
  });
});
