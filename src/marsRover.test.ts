import { MarsRover } from "./MarsRover";

describe("Mars Rover", () => {
  test("Should start at position (4,0) and be at position (1,0) whith orientation NORTH given commands [A, A, A, D, D]", () => {
    const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

    rover.executeCommands(["FORWARD", "FORWARD", "RIGHT", "RIGHT"]);

    expect(rover.position).toStrictEqual({ x: 0, y: 1 });
    expect(rover.orientation).toBe("NORTH");
  });

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
});
