import "./App.css";
import { Board } from "./Board";

function App() {
  let b = new Board(3, 3);

  b.setGrid();
  b.setCell("a", 0, 1);
  b.setCell("a", 1, 1);
  b.setCell("a", 2, 1);

  b.showGrid();
  b.tick();
  b.showGrid();
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
