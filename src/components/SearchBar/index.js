import React from "react";
import debounce from "utils/debounce";

const SearchBar = ({ onChange }) => {
  const debouncedOnChange = debounce(onChange, 200);

  return (
    <>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="searchInput" className="sr-only">
            Search
          </label>
          <input
            onChange={e => debouncedOnChange({ q: e.target.value })}
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Search..."
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
