/* eslint-disable react/prop-types */
const Nav = ({ query, setQuery, movies }) => {
  return (
    <div className="container">
      <div>
        <h4>MovieZilla</h4>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Movie..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <p>You Found {query ? movies.length : 0} Result</p>
      </div>
    </div>
  );
};

export default Nav;
