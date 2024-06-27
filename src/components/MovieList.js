import React from "react";
import Movie from "./Movie";

const MovieList = ({ movie, handleAddWatch, WatchedList }) => {
  return (
    <ul className="list">
      <Movie
        WatchedList={WatchedList}
        handleAddWatch={handleAddWatch}
        movie={movie}
      />
    </ul>
  );
};

export default MovieList;
