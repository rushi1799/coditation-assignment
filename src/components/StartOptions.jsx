import React from "react";
import PropTypes from "prop-types";

const StartOptions = (props) => {
  const { input, handleChange, setBoard, seed } = props;
  return (
    <div>
      <button onClick={seed}>Seed data</button>
      <form onSubmit={(e) => setBoard(e)}>
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
