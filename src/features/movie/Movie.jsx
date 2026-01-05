import { IoCalendar } from "react-icons/io5";

function Movie({ movie, setMovieSelectedId }) {
    function selectMovieHandler(id) {
        console.log(id);
        setMovieSelectedId(id)
    }

    return (
        <li
            onClick={() => selectMovieHandler(movie.imdbID)}
        >
            <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
            />
            <h3>{movie.Title}</h3>
            <div>
                <p className="year">
                    <span>
                        <IoCalendar />
                    </span>
                    <span>{movie.Year}</span>
                </p>
                <p className="type">
                    <span>
                        Type:&nbsp;
                        {movie.Type}
                    </span>
                </p>
            </div>
        </li>
    );
}

export default Movie;
