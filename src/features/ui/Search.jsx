import { FaMagnifyingGlass } from "react-icons/fa6";

function Search({ query, setQuery }) {

    return (
        <div className="search-wrapper">
            <input
                className="search"
                type="text"
                placeholder="Search movies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <FaMagnifyingGlass className="search_icon" />
        </div>
    );
}

export default Search;
