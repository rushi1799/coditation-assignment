import React from "react";

const BoardComponent = (props) => {
  const { grid } = props;
  return (
    <div>
      <div
        style={{
          width: 500,
          height: 500,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}>
        {grid.map((row, idx) => (
          <div key={idx} style={{ display: "flex", width: "100%", flex: 1 }}>
            {row.map((col) => (
              <div
                key={col.name}
                style={{
                  flex: 1,
                  background: col.isAlive ? "rgba(0,0,0,0.5)" : "#ccc",
                  border: "1px solid black",
                }}></div>
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          props.handleClick();
        }}>
        Tick
      </button>
    </div>
  );
};

export default BoardComponent;
