/* eslint-disable react/prop-types */

const WatchSummaryList = ({ movie, onDelete }) => {
  function handleDelete() {
    onDelete(movie.imdbID);
  }

  return (
    <div key={movie.imdbID} className="movie-lists">
      <img src={movie.Poster} alt="" />
      <div className="movie-watchedDetails">
        <p>{movie.Title}</p>
        <p>{movie.imdbRating}</p>
        <p>⏱️ {movie.Runtime}</p>
        <p onClick={handleDelete} className="delete">
          x
        </p>
      </div>
    </div>
  );
};

export default WatchSummaryList;
