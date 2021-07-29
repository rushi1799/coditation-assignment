import React from "react";
import PropTypes from "prop-types";

const HandlingOptions = (props) => {
  const {
    input,
    search,
    searchResult,
    setSearch,
    handleInsert,
    handleSearch,
    handleChange,
    setOpen,
  } = props;
  return (
    <div>
      <form onSubmit={(e) => handleInsert(e)}>
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
          min={0}
          max={input.cols - 1}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">insert</button>
      </form>
      <form onSubmit={(e) => handleSearch(e)}>
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
          <p>Name : {searchResult.name}</p>
          <p>Position : {`{${searchResult.x},${searchResult.y}}`}</p>
          <p>Status : {searchResult.isAlive ? "Alive" : "Dead"}</p>
          <p>Alive Neighbors : {searchResult.aliveNeighbor}</p>
        </div>
      )}
      <button onClick={() => setOpen((st) => !st)}>Close</button>
    </div>
  );
};

HandlingOptions.propTypes = {
  input: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
  searchResult: PropTypes.object,
  setSearch: PropTypes.func.isRequired,
  handleInsert: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default HandlingOptions;
