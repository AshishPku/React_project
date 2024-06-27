import React, { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
const Movie = ({ movie, handleAddWatch, WatchedList }) => {
  const [selectedId, setSelectedId] = useState(null);
  const handleCloseMovieDetail = () => {
    setSelectedId(null);
  };
  useEffect(function () {
    const callback = (e) => {
      if (e.code === "Escape") {
        setSelectedId(null);
      }
    };
    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, []);
  return movie?.map((eachMovie) => (
    <li key={eachMovie.imdbID} className="movie-element">
      {selectedId === eachMovie.imdbID ? (
        <MovieDetails
          WatchedList={WatchedList}
          handleAddWatch={handleAddWatch}
          handleCloseMovieDetail={handleCloseMovieDetail}
          selectedID={selectedId}
        />
      ) : (
        <>
          <img src={eachMovie.Poster} className="movie-img" alt="movie" />
          <h3>{eachMovie.Title}</h3>
          <div>
            <p>🗓 {eachMovie.Year}</p>
          </div>
          <button
            onClick={() => setSelectedId(eachMovie.imdbID)}
            className="btn1"
          >
            Detail
          </button>
        </>
      )}
    </li>
  ));
};

export default Movie;
