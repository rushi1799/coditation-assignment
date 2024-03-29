import React from "react";
import "./styles/BoardComponent.css";
const BoardComponent = (props) => {
  const { grid } = props;
  return (
    <div>
      <div className="Board">
        {grid.map((row, idx) => (
          <div key={idx} className="Board-row">
            {row.map((col) => (
              <div
                key={col.name}
                style={{
                  background: col.isAlive ? "rgba(0,0,0,0.5)" : "#ccc",
                }}
                className="Board-cell"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="notations">
        <div className="alive"> </div> Alive
        <div className="dead"></div> Dead
      </div>
      <button
        className="Board-tick"
        onClick={() => {
          props.handleTick();
        }}>
        Tick
      </button>
    </div>
  );
};

export default BoardComponent;
