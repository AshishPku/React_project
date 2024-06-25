import React from "react";
import MovieList from "./MovieList";
const ListBox = ({ movie }) => {
  return (
    <div className="box">
      <button className="btn-toggle">-</button>
      <MovieList movie={movie} />
    </div>
  );
};

export default ListBox;
