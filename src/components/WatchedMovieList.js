import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({ watchedMovie }) => {
  return (
    <ul className="list">
      {watchedMovie.map((movie) => (
        <WatchedMovie key="some-unique-key" movie={movie} />
      ))}
    </ul>
  );
};
export default WatchedMovieList;
