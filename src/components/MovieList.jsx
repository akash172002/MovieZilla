import Movie from "./movie";

const MovieList = ({ movies, setSelect }) => {
  return (
    <div className="list">
      {movies?.map((item) => (
        <Movie movies={item} key={item.imdbID} setSelect={setSelect} />
      ))}
    </div>
  );
};

export default MovieList;
