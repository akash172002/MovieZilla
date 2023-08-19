/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

// eslint-disable-next-line react/prop-types
const MovieDetails = ({ selectId, KEY, watched, onAddMovie, onClose }) => {
  const [watchOn, setWatchOn] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectId);

  useEffect(
    function () {
      async function WatchedMovie() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectId}`
          );

          const data = await res.json();

          setWatchOn(data);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      WatchedMovie();
    },
    [KEY, selectId]
  );

  const { Title, Poster, Runtime, imdbRating, Plot, Actors, Director, Genre } =
    watchOn;

  function handleAdd() {
    const newData = {
      imdbID: selectId,
      Title,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Runtime.split(" ").at(0),
    };
    onAddMovie(newData);
    onClose();
  }

  return (
    <>
      <p className="leftArrow" onClick={() => onClose()}>
        &larr;
      </p>
      {isLoading && error && <Loader />}
      {!isLoading && (
        <div className="watched-detail">
          <div className="watched-title">
            <img src={Poster} alt="Watched Poster" />
            <div className="title-detail">
              <h3>{Title}</h3>
              <p>{Genre}</p>
              <p>⏱️ {Runtime}</p>
              <p>⭐ {imdbRating}</p>
            </div>
          </div>
          {!isWatched ? (
            <button onClick={() => handleAdd()}>Add to List</button>
          ) : (
            <p className="noti">You have already added to list</p>
          )}

          <div className="details">
            <p>{Plot}</p>
            <p>Cast - {Actors}</p>
            <p>Director- {Director}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
