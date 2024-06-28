import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loading from "../ErrorM/Loading";
const KEY = "a55b26e";
const MovieDetails = ({
  selectedID,
  handleCloseMovieDetail,
  handleAddWatch,
  WatchedList,
}) => {
  const [movie, setmovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [Rating, SetRating] = useState(0);
  const isWatched = WatchedList.map((movie) => movie.imdbID).includes(
    selectedID
  );
  useEffect(
    function () {
      if (!movie) return;
      document.title = `Movie | ${movie.Title}`;
      return function () {
        document.title = "FabMovie.com";
      };
    },
    [movie]
  );
  useEffect(
    function () {
      async function fetchDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        const data = await res.json();
        setmovie(data);
        setIsLoading(false);
      }
      fetchDetails();
    },
    [selectedID]
  );
  return isLoading ? (
    <Loading />
  ) : (
    <div className="movie-detail-container">
      <button
        className="btn1"
        onClick={() => {
          handleCloseMovieDetail();
        }}
      >
        Back
      </button>
      <div>
        <img src={movie.Poster} className="movie-img1" alt="movie" />
        <h3>{movie.Title}</h3>
        <p>{movie.imdbRating}</p>
        {!isWatched ? (
          <>
            <StarRating maxRating={7} SetRating={SetRating}></StarRating>
            {Rating > 0 && (
              <button
                className="btn-add"
                onClick={() => {
                  handleAddWatch({ ...movie, userRating: Rating });
                  handleCloseMovieDetail();
                }}
              >
                +Add to List
              </button>
            )}
          </>
        ) : (
          <p className="movie-element">Your already rated this movie.</p>
        )}
        <div>
          <p>🗓 {movie.Released}</p>
          <p>⏳ {movie.Runtime}</p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Description:</strong>
            {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong>
            {movie.Language}
          </p>
          {/* <p>{movie.Ratings}</p> */}
          <p>
            <strong>Votes: </strong>
            {movie.imdbVotes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
