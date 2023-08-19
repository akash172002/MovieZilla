// eslint-disable-next-line react/prop-types
const Movie = ({ movies, setSelect }) => {
  return (
    <div onClick={() => setSelect(movies.imdbID)}>
      <div className="list-search">
        <img src={movies.Poster} alt="poster" />
        <div className="list-detail">
          <h3>{movies.Title}</h3>
          <p>🗓️ {movies.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
