import React from "react";

const WatchedMovie = ({ movie, handleDeleteWatchedList }) => {
  return (
    <li className="movie-element watched-movie-container">
      <img src={movie.Poster} alt="movie" className="movie-img" />
      <div className="watched-container">
        <h3>{movie.Title}</h3>
        <p>
          <span>⭐ </span>
          <span> {movie.imdbRating}</span>
        </p>
        <p>
          <span>✨ </span>
          <span> {movie.userRating}</span>
        </p>
        <p>
          <span>Timer: </span>
          <span> {movie.Runtime}</span>
        </p>
      </div>
      <button
        onClick={() => {
          handleDeleteWatchedList(movie.imdbID);
        }}
        className="btn-cross"
      >
        &#10007;
      </button>
    </li>
  );
};

export default WatchedMovie;
