const Robot = require("../src/models/robot");

test("should ", () => {
  const robot = new Robot(1, 1, "S");
  expect(robot.showPosition()).toBe("1 1 S");
});
