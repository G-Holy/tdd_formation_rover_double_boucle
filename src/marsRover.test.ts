import { MarsRover } from "./MarsRover";

describe("Mars Rover", () => {
  test("Given a rover at (4,0) NORTH when it executes commands [FORWARD, FORWARD, FORWARD, RIGHT, RIGHT] then it should be (1,0) NORTH", () => {
    const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

    const obstacleEncountered = rover.executeCommands([
      "FORWARD",
      "FORWARD",
      "FORWARD",
      "RIGHT",
      "RIGHT",
    ]);

    expect(rover.position).toStrictEqual({ x: 0, y: 1 });
    expect(rover.orientation).toBe("SOUTH");
    expect(obstacleEncountered).toBeFalsy();
  });

  describe("Mars rover exploration north without obstacle", () => {
    test("Should start at (4,0) NORTH and be (4,0) NORTH", () => {
      const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

      expect(rover.position).toStrictEqual({ x: 0, y: 4 });
      expect(rover.orientation).toBe("NORTH");
    });

    test("Should start (0,4) NORTH and be (0,4) EAST given [RIGHT]", () => {
      const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

      rover.executeCommands(["RIGHT"]);

      expect(rover.position).toStrictEqual({ x: 0, y: 4 });
      expect(rover.orientation).toBe("EAST");
    });

    test("Should start (0,4) EAST and be (0,4) SOUTH given [RIGHT]", () => {
      const rover = new MarsRover({ x: 0, y: 4 }, "EAST");

      rover.executeCommands(["RIGHT"]);

      expect(rover.position).toStrictEqual({ x: 0, y: 4 });
      expect(rover.orientation).toBe("SOUTH");
    });

    test("Should start (0,4) NORTH and be (0,4) SOUTH given [RIGHT, RIGHT]", () => {
      const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

      rover.executeCommands(["RIGHT", "RIGHT"]);

      expect(rover.position).toStrictEqual({ x: 0, y: 4 });
      expect(rover.orientation).toBe("SOUTH");
    });

    test("Should start (0,4) NORTH and be (0,3) NORTH given [FORWARD]", () => {
      const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

      rover.executeCommands(["FORWARD"]);

      expect(rover.position).toStrictEqual({ x: 0, y: 3 });
      expect(rover.orientation).toBe("NORTH");
    });

    test("Should start (0,3) NORTH and be (0,2) NORTH given [FORWARD]", () => {
      const rover = new MarsRover({ x: 0, y: 3 }, "NORTH");

      rover.executeCommands(["FORWARD"]);

      expect(rover.position).toStrictEqual({ x: 0, y: 2 });
      expect(rover.orientation).toBe("NORTH");
    });
  });

  // test("Given a rover at (1,0) SOUTH when it executes commands [FORWARD, FORWARD, FORWARD] then it should be (1,0) NORTH", () => {
  //   const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

  //   rover.executeCommands(["FORWARD", "FORWARD", "FORWARD", "RIGHT", "RIGHT"]);

  //   expect(rover.position).toStrictEqual({ x: 0, y: 1 });
  //   expect(rover.orientation).toBe("SOUTH");
  // });
});
