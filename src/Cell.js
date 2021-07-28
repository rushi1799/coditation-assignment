class Cell {
  constructor(name, x, y, isAlive = false, aliveNeighbor = 0) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.isAlive = isAlive;
    this.aliveNeighbor = aliveNeighbor;
  }
}

export { Cell };
