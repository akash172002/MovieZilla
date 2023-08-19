/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import WatchSummaryList from "./WatchSummaryList";

// eslint-disable-next-line react/prop-types
const WatchSummary = ({ watched, onDelete }) => {
  console.log(watched);
  return (
    <div className="movie-list">
      {watched?.map((movies) => (
        <WatchSummaryList movie={movies} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default WatchSummary;
