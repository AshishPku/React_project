import React from "react";

const NumResults = ({ movie }) => {
  return (
    <p className="results">
      Found <strong>{movie.length}</strong> results
    </p>
  );
};

export default NumResults;
