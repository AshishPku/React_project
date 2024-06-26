import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import MovieList from "./components/MovieList";
import ErrorMessage from "./components/ErrorMessage";
const KEY = "a55b26e";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [WatchedList, setWatchedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("fuck");
  useEffect(() => {
    async function FetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong in fetching the movies.");
        }
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not Found");
        }
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    FetchData();
  }, []);
  return (
    <div>
      <NavBar>
        <Logo />
        <Search query={query} queryhandle={setQuery} />
        <NumResults movie={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <p>Loading...</p>}
          {!isLoading && !error && <MovieList movie={movies} />}
          {error && <ErrorMessage message={error.message} />}
        </Box>
        <Box>
          <WatchedSummary />
          <WatchedMovieList watchedMovie={WatchedList} />
        </Box>
      </Main>
    </div>
  );
};

export default App;
