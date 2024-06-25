import React from "react";

const Movie = ({ movie }) => {
  return movie.map((eachMovie) => (
    <li className="movie-element">
      <img src={eachMovie.Poster} className="movie-img" alt="movie" />
      <h3>{eachMovie.Title}</h3>
      <div>
        <p>⌛</p>
        <p>{eachMovie.Year}</p>
      </div>
    </li>
  ));
};

export default Movie;
