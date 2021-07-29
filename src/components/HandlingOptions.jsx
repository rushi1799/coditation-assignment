import React from "react";
import PropTypes from "prop-types";
import "./styles/HandlingOptions.css";

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
    <div className="HandlingOptions">
      <ul>
        <li>Row and Column No starts from zero</li>
        <li>
          Giving name to cell is optional by default they have unique names
          according to their position. eg:name of cell[1][1] is 1-1.
        </li>
        <li>
          Search options is case insensitive and inserting cell with already
          existing name will not work
        </li>
      </ul>
      <form onSubmit={(e) => handleInsert(e)} className="insert-cell-form">
        <span>New Cell</span>

        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="cell name (optional)"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Row no</label>
          <input
            type="number"
            name="rowno"
            value={input.rowno}
            min={0}
            max={input.rows - 1}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Column no</label>
          <input
            type="number"
            name="colno"
            value={input.colno}
            min={0}
            max={input.cols - 1}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type="submit">insert</button>
      </form>
      <form onSubmit={(e) => handleSearch(e)} className="search-cell-form">
        <span>Search Cell</span>
        <div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cell Name"
          />
          <button type="submit">search</button>
        </div>
      </form>
      {searchResult && (
        <div className="search-results">
          <p>
            <span>Name :</span> {searchResult.name}
          </p>
          <p>
            <span>Position :</span> {`{${searchResult.x},${searchResult.y}}`}
          </p>
          <p>
            <span>Status :</span> {searchResult.isAlive ? "Alive" : "Dead"}
          </p>
          <p>
            <span>Alive Neighbors :</span> {searchResult.aliveNeighbor}
          </p>
        </div>
      )}
      <button onClick={() => setOpen((st) => !st)} id="close">
        Close
      </button>
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
