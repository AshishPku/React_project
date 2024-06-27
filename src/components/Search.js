import React, { useState } from "react";

const Search = ({ query, setQuery }) => {
  return (
    <input
      className="search"
      value={query}
      type="text"
      placeholder="Search movie..."
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
};

export default Search;
