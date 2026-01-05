import { useState } from "react";

import { tempWatchedData } from "../ui/data";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { TbMovie } from "react-icons/tb";

function WatchedSummary({ watched, userRating }) {
    // const [watched, setWatched] = useState(tempWatchedData);

    const average = (arr) =>
        arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

    const avgImdbRating = average(
        watched.map((movie) => movie.imdbRating)
    );
    const avgUserRating = average(
        watched.map((movie) => movie.userRating)
    );

    const avgRuntime = average(
        watched.map((movie) => +movie.Runtime.split(" ").at(0))
    );
    return (
        <div className="summary">
            <h2>Movies you watched</h2>
            <div>
                <p>
                    <span>
                        <TbMovie className="summary_movie" />
                    </span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>
                        <FaStar className="summary_star" />
                    </span>
                    <span>{avgImdbRating.toFixed(1)}</span>
                </p>
                <p>
                    <span>
                        <FaRegStar className="summary_average" />
                    </span>
                    <span>{avgUserRating.toFixed(1)}</span>
                </p>
                <p>
                    <span>
                        <LuAlarmClock className="summary_time" />
                    </span>
                    <span>{avgRuntime.toFixed(0)} min</span>
                </p>
            </div>
        </div>
    );
}

export default WatchedSummary;
