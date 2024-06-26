import React, { useState } from "react";

const Search = ({ query, queryhandle }) => {
  return (
    <input
      className="search"
      value={query}
      type="text"
      placeholder="Search movie..."
      onChange={(e) => queryhandle(e.target.value)}
    ></input>
  );
};

export default Search;
