import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({ watchedMovie, handleDeleteWatchedList }) => {
  return (
    <ul className="list">
      {watchedMovie.map((movie) => (
        <WatchedMovie
          handleDeleteWatchedList={handleDeleteWatchedList}
          key="some-unique-key"
          movie={movie}
        />
      ))}
    </ul>
  );
};
export default WatchedMovieList;
