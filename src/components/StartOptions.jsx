import React from "react";
import PropTypes from "prop-types";
import "./styles/StartOptions.css";

const StartOptions = (props) => {
  const { input, handleChange, setBoard, seed } = props;
  return (
    <div className="StartOptions">
      <div className="StartOptions-note">
        <h4>Note</h4>
        <ul>
          <li>
            Click on seed data to get default grid 40*40 of 1600 cells in which
            500 cells are alive
          </li>
          <li>
            For Manual grid with some random alive cell.you can set rows and
            columns then click on set.
          </li>
        </ul>
      </div>
      <button onClick={seed} className="seed-btn">
        Seed data
      </button>
      <h5>Manual Setup </h5>

      <form onSubmit={(e) => setBoard(e)}>
        <div className="form-group">
          <label>Rows</label>
          <input
            type="number"
            name="rows"
            value={input.rows}
            min={3}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Columns</label>
          <input
            type="number"
            name="cols"
            value={input.cols}
            min={3}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit" className="set-btn">
          Set
        </button>
      </form>
    </div>
  );
};

StartOptions.propTypes = {
  input: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setBoard: PropTypes.func.isRequired,
  seed: PropTypes.func.isRequired,
};

export default StartOptions;
