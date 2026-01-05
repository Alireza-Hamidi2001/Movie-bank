import { RiNumbersFill } from "react-icons/ri";
import logo from "./../../assets/images/alireza4.png";
import Search from "./Search";

function Header({ movies, query, setQuery }) {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src={logo} alt="header logo" />
            </div>
            <Search query={query} setQuery={setQuery} />
            <p className="num-results">
                <RiNumbersFill />
                Found {movies.length} results
            </p>
        </nav>
    );
}

export default Header;
