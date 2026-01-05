import { useState } from "react";

import WatchedSummary from "./WatchedSummary";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import WatchedMovieList from "./WatchedMovieList";

function WatchedList({ watched, userRating }) {
    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <>
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? <FaMinus /> : <FaPlus />}
            </button>
            {isOpen2 && (
                <>
                    <WatchedSummary
                        watched={watched}
                        userRating={userRating}
                    />
                    <WatchedMovieList
                        watched={watched}
                        userRating={userRating}
                    />
                </>
            )}
        </>
    );
}

export default WatchedList;
