import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Movie from "./Movie";

function MovieList({ movies, setMovieSelectedId }) {
    const [isOpen1, setIsOpen1] = useState(true);

    return (
        <>
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? <FaMinus /> : <FaPlus />}
            </button>
            {isOpen1 && (
                <ul className="list">
                    {movies?.map((movie) => (
                        <Movie
                            key={movie.imdbID}
                            movie={movie}
                            setMovieSelectedId={
                                setMovieSelectedId
                            }
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

export default MovieList;
