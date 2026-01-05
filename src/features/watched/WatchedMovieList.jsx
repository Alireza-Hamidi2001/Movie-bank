import { useState } from "react";

import { tempWatchedData } from "../ui/data";

import { FaStar } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { PiShootingStar } from "react-icons/pi";

function WatchedMovieList({ watched, userRating }) {
    // const [watched, setWatched] = useState(tempWatchedData);

    return (
        <ul className="list">
            {watched.map((movie) => (
                <li key={movie.imdbID}>
                    <img
                        src={movie.Poster}
                        alt={`${movie.Title} poster`}
                    />
                    <h3>{movie.Title}</h3>
                    <div>
                        <p>
                            <span className="watched_icon">
                                <FaStar />
                            </span>
                            <span>{movie.imdbRating}</span>
                        </p>
                        <p>
                            <span className="watched_icon">
                                <PiShootingStar />
                            </span>
                            <span>{movie.userRating}</span>
                        </p>
                        <p>
                            <span className="watched_icon">
                                <FaHourglassHalf />
                            </span>
                            <span>
                                {movie.Runtime.split(" ").at(0)} min
                            </span>
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default WatchedMovieList;
