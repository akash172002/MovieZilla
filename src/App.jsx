import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import Box from "./components/Box";

import MovieDetails from "./MovieDetails";
import WatchSummary from "./WatchSummary";
import Loader from "./components/Loader";

const KEY = "6c19f6dd";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [selectId, setSelectId] = useState(null);
  const [watched, setWatched] = useState([]);

  function handleSelect(id) {
    setSelectId((selectId) => (id === selectId ? null : id));
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleClose() {
    setSelectId(null);
  }

  function handleDelete(id) {
    setWatched((watched) => watched.filter((movies) => movies.imdbID !== id));
  }

  useEffect(
    function () {
      async function callback() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok) throw new Error("Oops something went wrong");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);

          setError("");
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      callback();
    },
    [query]
  );
  return (
    <div>
      <Nav query={query} setQuery={setQuery} movies={movies} />
      <main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} setSelect={handleSelect} />
          )}
        </Box>
        <Box>
          <div className="list">
            <div className="watch-details">
              <h2>Watched Movie</h2>
              {selectId ? (
                <MovieDetails
                  selectId={selectId}
                  onAddMovie={handleAddWatched}
                  watched={watched}
                  KEY={KEY}
                  onClose={handleClose}
                  open={open}
                />
              ) : (
                <>
                  <WatchSummary
                    watched={watched}
                    query={query}
                    onDelete={handleDelete}
                  />
                </>
              )}
            </div>
          </div>
        </Box>
      </main>
    </div>
  );
}

export default App;
