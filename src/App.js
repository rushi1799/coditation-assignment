import { useState } from "react";
import "./App.css";
import { Board } from "./Board";
import BoardComponent from "./BoardComponent";
import { arr, rows, cols } from "./seedData";

function App() {
  let b;
  const [prev, setPrevGrid] = useState();
  const [grid, setGrid] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();

  const [input, setInput] = useState({
    rows: 10,
    cols: 10,
    rowno: 0,
    colno: 0,
    name: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    prev.tick();
    setGrid(prev.grid);
    setPrevGrid(prev);
  };

  const seed = () => {
    b = new Board(rows, cols);
    b.setGrid();
    arr.map((i) => {
      let temp = i.split("-");
      b.setCell("", temp[0], temp[1]);
    });
    setPrevGrid(b);
    setGrid(b.grid);
  };

  return (
    <div className="App">
      <h1>Coditation Assignment</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
        <div>
          <button onClick={seed}>Seed data</button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              b = new Board(input.rows, input.cols);
              b.setGrid();
              setPrevGrid(b);
              setGrid(b.grid);
            }}>
            <input
              type="number"
              name="rows"
              value={input.rows}
              min={3}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="cols"
              value={input.cols}
              min={3}
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">save</button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              prev.setCell(
                input.name,
                Number(input.rowno),
                Number(input.colno)
              );
              setInput((st) => ({
                ...st,
                name: "",
                rowno: 0,
                colno: 0,
              }));
              setGrid(prev);

              setGrid((st) => [...prev.grid]);
            }}>
            <input
              type="text"
              name="name"
              value={input.name}
              min={0}
              max={input.rows - 1}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="rowno"
              value={input.rowno}
              min={0}
              max={input.rows - 1}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="colno"
              value={input.colno}
              max={input.cols - 1}
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">insert</button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let flag = false;
              for (let i = 0; i < input.rows; i++) {
                for (let j = 0; j < input.cols; j++) {
                  if (prev.grid[i][j].name === search) {
                    flag = true;
                    prev.setNeighbors(i, j);
                    setSearchResult((st) => prev.grid[i][j]);

                    break;
                  }
                }
                if (flag) {
                  break;
                }
              }
              if (!flag) {
                alert("Not found May be cell died in last tick");
                setSearchResult();
              }
            }}>
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">search</button>
          </form>
          {searchResult && (
            <div>
              <p>name : {searchResult.name}</p>
              <p>position : {`{${searchResult.x},${searchResult.y}}`}</p>
              <p>status : {searchResult.isAlive ? "Alive" : "Dead"}</p>
              <p>Alive Neighbors : {searchResult.aliveNeighbor}</p>
            </div>
          )}
        </div>
        <BoardComponent grid={grid ? grid : []} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
