const Robot = require("../src/robot");

describe("Show position", () => {
  test("WAITING robot ", () => {
    const robot = new Robot(1, 1, "S");
    expect(robot.showPosition()).toBe("1 1 S");
  });
  test("LOST robot ", () => {
    const robot = new Robot(1, 1, "S");
    robot.changeStatus("LOST");
    expect(robot.showPosition()).toBe("1 1 S LOST");
  });
});

describe("Rotations", () => {
  describe("Rotations Left", () => {
    test("N", () => {
      const robot = new Robot(1, 1, "N");
      robot.rotateLeft();
      expect(robot.showPosition()).toBe("1 1 W");
    });
    test("E", () => {
      const robot = new Robot(1, 1, "E");
      robot.rotateLeft();
      expect(robot.showPosition()).toBe("1 1 N");
    });
    test("S", () => {
      const robot = new Robot(1, 1, "S");
      robot.rotateLeft();
      expect(robot.showPosition()).toBe("1 1 E");
    });
    test("W", () => {
      const robot = new Robot(1, 1, "W");
      robot.rotateLeft();
      expect(robot.showPosition()).toBe("1 1 S");
    });
    test("S", () => {});
  });
  describe("Rotations Right", () => {
    test("N", () => {
      const robot = new Robot(1, 1, "N");
      robot.rotateRight();
      expect(robot.showPosition()).toBe("1 1 E");
    });
    test("E", () => {
      const robot = new Robot(1, 1, "E");
      robot.rotateRight();
      expect(robot.showPosition()).toBe("1 1 S");
    });
    test("S", () => {
      const robot = new Robot(1, 1, "S");
      robot.rotateRight();
      expect(robot.showPosition()).toBe("1 1 W");
    });
    test("W", () => {
      const robot = new Robot(1, 1, "W");
      robot.rotateRight();
      expect(robot.showPosition()).toBe("1 1 N");
    });
    test("S", () => {});
  });
});

describe("Movement", () => {
  describe("Ahead", () => {
    test("N", () => {
      const robot = new Robot(1, 1, "N");
      robot.goAhead();
      expect(robot.showPosition()).toBe("1 2 N");
    });
    test("E", () => {
      const robot = new Robot(1, 1, "E");
      robot.goAhead();
      expect(robot.showPosition()).toBe("2 1 E");
    });
    test("S", () => {
      const robot = new Robot(1, 1, "S");
      robot.goAhead();
      expect(robot.showPosition()).toBe("1 0 S");
    });
    test("W", () => {
      const robot = new Robot(1, 1, "W");
      robot.goAhead();
      expect(robot.showPosition()).toBe("0 1 W");
    });
  });
  describe("Back", () => {
    test("N", () => {
      const robot = new Robot(1, 1, "N");
      robot.goBack();
      expect(robot.showPosition()).toBe("1 0 N");
    });
    test("E", () => {
      const robot = new Robot(1, 1, "E");
      robot.goBack();
      expect(robot.showPosition()).toBe("0 1 E");
    });
    test("S", () => {
      const robot = new Robot(1, 1, "S");
      robot.goBack();
      expect(robot.showPosition()).toBe("1 2 S");
    });
    test("W", () => {
      const robot = new Robot(1, 1, "W");
      robot.goBack();
      expect(robot.showPosition()).toBe("2 1 W");
    });
  });
});
