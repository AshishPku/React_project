import React from "react";

const WatchedMovie = ({ movie }) => {
  return (
    <li>
      <img src={movie.Poster} alt="movie" className="movie-img" />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>✨</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>Timer</span>
          <span>{movie.runtime}</span>
        </p>
      </div>
    </li>
  );
};

export default WatchedMovie;
