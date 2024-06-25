import React from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";

const WatchedBox = () => {
  return (
    <div className="box">
      <WatchedSummary />
      <WatchedMovieList />
    </div>
  );
};

export default WatchedBox;
