import { Cell } from "./Cell";
class Board {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.grid = new Array(x);
  }
  //initialize gird
  setGrid() {
    for (var i = 0; i < this.x; i++) {
      this.grid[i] = new Array(this.y);
    }
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        this.grid[i][j] = new Cell(`${i}-${j}`, i, j);
      }
    }
  }
  //insert cell
  setCell(name, x, y) {
    name = name.trim();
    this.grid[x][y].name = name.length > 0 ? name : `${x}-${y}`;
    this.grid[x][y].isAlive = true;
  }

  //count alive neighbors
  setNeighbors(x, y) {
    let count = 0;
    count += this.isOnBoard(x - 1, y - 1);
    count += this.isOnBoard(x, y - 1);
    count += this.isOnBoard(x + 1, y - 1);

    count += this.isOnBoard(x - 1, y);
    count += this.isOnBoard(x + 1, y);

    count += this.isOnBoard(x - 1, y + 1);
    count += this.isOnBoard(x, y + 1);
    count += this.isOnBoard(x + 1, y + 1);

    this.grid[x][y].aliveNeighbor = count;
  }
  //check cell position is valid or not
  isOnBoard(x, y) {
    if (x < 0 || x >= this.x) return 0;
    if (y < 0 || y >= this.y) return 0;
    return this.grid[x][y].isAlive ? 1 : 0;
  }
  //implementation of rules
  tick() {
    let newBoard = new Board(this.x, this.y);
    newBoard.setGrid();

    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        this.setNeighbors(i, j);
        newBoard.grid[i][j].name = this.grid[i][j].name;

        if (this.grid[i][j].isAlive) {
          //rule 1
          if (this.grid[i][j].aliveNeighbor < 2) {
            newBoard.grid[i][j].isAlive = false;
          } //rule 2
          else if (this.grid[i][j].aliveNeighbor > 3) {
            newBoard.grid[i][j].isAlive = false;
          } //rule 3
          else if (
            this.grid[i][j].aliveNeighbor === 2 ||
            this.grid[i][j].aliveNeighbor === 3
          ) {
            newBoard.grid[i][j].isAlive = true;
          }
        } //rule 4
        else {
          if (this.grid[i][j].aliveNeighbor === 3) {
            newBoard.grid[i][j].isAlive = true;
          }
        }
      }
    }
    this.grid = newBoard.grid;
  }

  //show console output of grid
  showGrid() {
    for (let i = 0; i < this.x; i++) {
      let line = "";
      for (let j = 0; j < this.y; j++) {
        if (this.grid[i][j].isAlive) {
          line += "1";
        } else {
          line += "0";
        }
      }
      console.log(line);
    }
    console.log("-----");
  }
}

export { Board };
