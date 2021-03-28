const Grid = require("../src/grid");
const Robot = require("../src/robot");

describe("Robot On the grid", () => {
  test("Yes ", () => {
    const grid = new Grid(20, 20);
    const robot = new Robot(1, 1, "S");
    expect(robot.showPosition()).toBe("1 1 S");
  });
  test("No ", () => {
    const robot = new Robot(1, 1, "S");
    robot.changeStatus("LOST");
    expect(robot.showPosition()).toBe("1 1 S LOST");
  });
});
