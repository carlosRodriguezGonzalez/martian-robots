const Robot = require("../src/robot");

test("should ", () => {
  const robot = new Robot(1, 1, "S");
  expect(robot.showPosition()).toBe("1 1 S");
});
