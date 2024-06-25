import React from "react";
import Movie from "./Movie";

const MovieList = ({ movie }) => {
  return (
    <ul className="list">
      <Movie movie={movie} />
    </ul>
  );
};

export default MovieList;
