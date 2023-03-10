// simulation du mars rover
// il exec une liste de commande
// capacité du mars rover : avancer / orienter (gauche droite)
// obstacle il s'arrete et donne sa position actuelle
// position de base
// map TOR
// exemples de séquences :
// démarre en 4/0  orientation Nord en bas a gauche A / A / A / D / D : exploration
// démarre en en 0/1 orientation sud : A / A / A : obstacle en 1/2 il est censé avancer une fois et rester sur place
// démarre en 2/4 orientation West G / A / D / A /A / D / A / G
// a la fin de la séquence d'instruction il retourne sa position / orientation // si il a rencontré un obstacle (il est pas a sa position attendue)

export type ObstacleEncountered = boolean;

export class MarsRover {
  constructor(
    public position: { x: number; y: number },
    public orientation: "NORTH" | "EAST" | "SOUTH" | "WEST"
  ) {}

  public executeCommands(
    commands: ("RIGHT" | "FORWARD")[]
  ): ObstacleEncountered {
    commands.forEach((command) => {
      if (command === "RIGHT") {
        this.turnRight();
      } else if (command === "FORWARD") {
        this.position.y -= 1;
      }
    });
    return false;
  }

  private turnRight() {
    if (this.orientation === "NORTH") {
      this.orientation = "EAST";
    } else if (this.orientation === "EAST") {
      this.orientation = "SOUTH";
    }
  }
}
