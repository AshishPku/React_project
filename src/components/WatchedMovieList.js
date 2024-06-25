import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = () => {
  return (
    <ul className="list">
      <WatchedMovie key="some-unique-key" />
    </ul>
  );
};
export default WatchedMovieList;
