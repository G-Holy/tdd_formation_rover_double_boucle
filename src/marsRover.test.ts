import { MarsRover } from "./MarsRover";

describe("Mars Rover", () => {
  test("Should start at position (4,0) and be at position (1,0) whith orientation South given commands [A, A, A, D, D]", () => {
    const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

    rover.executeCommands(["FORWARD", "FORWARD", "FORWARD", "RIGHT", "RIGHT"]);

    expect(rover.position).toStrictEqual({ x: 0, y: 1 });
    expect(rover.orientation).toBe("NORTH");
  });

  test("Should start at position (4,0) and be at position (1,0) whith orientation South given commands [A, A, A, D, D]", () => {
    const rover = new MarsRover({ x: 0, y: 4 }, "NORTH");

    expect(rover.position).toStrictEqual({ x: 0, y: 4 });
    expect(rover.orientation).toBe("NORTH");
  });
});
