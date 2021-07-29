import { useState } from "react";
import "./App.css";
import { Board } from "./Board";
import BoardComponent from "./components/BoardComponent";
import HandlingOptions from "./components/HandlingOptions";
import StartOptions from "./components/StartOptions";
import { arr, rows, cols, seeder } from "./seedData";

function App() {
  let b;
  const [prev, setPrevGrid] = useState();
  const [grid, setGrid] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [open, setOpen] = useState(true);

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

  const handleTick = () => {
    prev.tick();
    setGrid(prev.grid);
    setPrevGrid(prev);
    setSearchResult();
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
    setOpen((st) => !st);
  };

  const setBoard = (e) => {
    e.preventDefault();
    b = new Board(input.rows, input.cols);
    b.setGrid();
    let arr = seeder(input.rows, input.cols);
    arr.map((i) => {
      let temp = i.split("-");
      b.setCell("", temp[0], temp[1]);
    });
    setPrevGrid(b);
    setGrid(b.grid);
    setOpen((st) => !st);
  };
  const handleInsert = (e) => {
    e.preventDefault();
    let flag = false;
    for (let i = 0; i < input.rows; i++) {
      for (let j = 0; j < input.cols; j++) {
        if (
          prev.grid[i][j].name.toLocaleLowerCase() ===
          input.name.toLocaleLowerCase()
        ) {
          flag = true;
          alert("name already exist");
          break;
        }
      }
      if (flag) {
        break;
      }
    }
    if (!flag) {
      prev.setCell(input.name, Number(input.rowno), Number(input.colno));
      setInput((st) => ({
        ...st,
        name: "",
        rowno: 0,
        colno: 0,
      }));
      setGrid(prev);
      setGrid((st) => [...prev.grid]);
      setSearchResult();
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    let flag = false;
    for (let i = 0; i < input.rows; i++) {
      for (let j = 0; j < input.cols; j++) {
        if (
          prev.grid[i][j].name.toLocaleLowerCase() ===
          search.toLocaleLowerCase()
        ) {
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
  };

  return (
    <div className="App">
      <h1>Coditation Assignment</h1>
      <div className="Root">
        {open ? (
          <StartOptions
            seed={seed}
            input={input}
            handleChange={handleChange}
            setBoard={setBoard}
          />
        ) : (
          <HandlingOptions
            input={input}
            search={search}
            searchResult={searchResult}
            setSearch={setSearch}
            handleChange={handleChange}
            handleSearch={handleSearch}
            handleInsert={handleInsert}
            setOpen={setOpen}
          />
        )}

        {!open && (
          <BoardComponent grid={grid ? grid : []} handleTick={handleTick} />
        )}
      </div>
    </div>
  );
}

export default App;
