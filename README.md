# Coditation Assignment

This solution is written Javascript and UI is created using React

## Run Locally

Clone the project

```bash
  git clone https://github.com/rushi1799/coditation-assignment.git
```

Go to the project directory

```bash
  cd coditation-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Solution Details

**Cell object Properties**
| Property name | Descripton |
| ----------------- | ------------------------------------------------------------------ |
| x | Grid row no. in which cell is present. |
| y| Grid column no. in which cell is present.|
| name| Name of cell by default it is according to cell position for cell at {1,2} name is "1-2".|
| isAlive | Status of cell. |
| aliveNeighbors | count of alive neighbors of cell. |

**Board object Properties**
| Property name | Descripton |
| ----------------- | ------------------------------------------------------------------ |
| x | Total number of rows. |
| y | Total number of columns.|
| grid |2D array contain cell object of size x\*y. |

**Methods of Board Class**
| Method | Descripton |
| ----------------- | ------------------------------------------------------------------ |
| setGrid() | Initialize grid with dead cells.|
| setCell(name, x, y) | Inserts cell to {x,y} position. |
| setNeighbors(x, y) | Sets count of alive neighbors of cell. |
| isOnBoard(x, y) | Checks cell positions is valid or not. |
| tick() | Simulates gird according to rules. |
| showGrid() | Display console output of grid state. |

**Tick function rules**
| Rules | Descripton |
| ----------------- | ------------------------------------------------------------------ |
| Rule 1|Any live cell with fewer than two live neighbors dies, as if by loneliness. |
| Rule 2|Any live cell with more than three live neighbors dies, as if by overcrowding. |
| Rule 3|Any live cell with two or three live neighbors lives, unchanged, to the next generation. |
| Rule 4|Any dead cell with exactly three live neighbors comes to life. |

**Seed Grid Data**

- Default seed gives grid of 40 row and 40 cols containing total 1600 cells of which random 500 cells are alive.
- In maunal seed you can set number of row and columns.
- In maunal seed 1/3 of cells are alive.

**Inserts cell to Grid**

- You can insert cell by specifying row number and column number.
- Giving name name to cell is optional.
  | Row number | Column Number | Default name of cell |
  | -----------|------ | ------------------------------------------------------------------ |
  | 1|5 | "1-5"|
  | 5|10 |"5-10" |
  |20 |56 | "20-56"|

- If you are providing name then make sure it is unique in grid.

**Searching cell in Grid**

- Logic of searching is written in _App.js_
- Linear search is used.

## Tech Stack

- React
- Javascript

## Deployment

Incase if this project does not work on local machine. project is deployed on folowing link you can also check it
[here](https://www.github.com/octokatherine)

## Screenshots

![App Screenshot](https://drive.google.com/uc?id=1or2PVOgF1g87o-Esh3YmYkr1TKGbF2Wi)

![App Screenshot](https://drive.google.com/uc?id=1Qzq8Xem7YnJkWmuADfglTce1wTU1eK8v)

## Author

- [@rushi1799](https://github.com/rushi1799)
