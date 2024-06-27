import React from "react";

const WatchedSummary = ({ watchedMovie }) => {
  var avgRating = 0,
    avgUserRating = 0,
    avgtotalTime = 0,
    totalNumber = watchedMovie.length;
  watchedMovie.map((e) => {
    avgRating += Number(e.imdbRating);
    avgUserRating += e.userRating;
    avgtotalTime += Number(e.Runtime.split(" ").at(0));
  });
  avgRating /= totalNumber;
  avgUserRating /= totalNumber;
  avgtotalTime /= totalNumber;
  return (
    <div className="watched-movie-detail">
      <p>Movies You Watched</p>
      <div className="watched-movie-container">
        <p>
          <span>🖊️</span>
          <span>{totalNumber}</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{avgRating.toFixed(2)}</span>
        </p>
        <p>
          <span>✨</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgtotalTime.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
