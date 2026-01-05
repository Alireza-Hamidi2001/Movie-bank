import { useEffect, useState } from "react";

import Loader from "./ui/Loader";
import ErrorMessage from "./error_handling/ErrorMessage";
import StarRating from "./ui/StarRating";

import { IoArrowBackSharp } from "react-icons/io5";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { MdAccessTimeFilled } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { FaUserGroup } from "react-icons/fa6";
import { BsFileTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";
import AddWatched from "./watched/AddWatched";

const KEY = "c9bd75bc";

function MovieDetails({
    movieSelectedId,
    setMovieSelectedId,
    setWatched,
    // userRating,
    // setUserRating,
}) {
    const [movie, setMovie] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);

    const {
        Title: title,
        Actors: actors,
        Director: director,
        Released: releaased,
        Runtime: runtime,
        imdbRating,
        Genre: genre,
        Ratings: ratings,
        Plot: plot,
        Poster: poster,
    } = movie;

    useEffect(
        function () {
            document.title = `Movie | ${title}`;
            return function () {
                document.title = "MovieMatrix"; 
            };
        },
        [title]
    );

    useEffect(
        function () {
            async function fetchDetails() {
                try {
                    setIsLoading(true);
                    setError("");
                    const res = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&i=${movieSelectedId}`
                    );
                    if (!res.ok)
                        throw new Error(
                            "Something went wrong during open selected movie."
                        );
                    const data = await res.json();
                    setMovie(data);
                    setIsLoading(false);
                    console.log(data);
                } catch (err) {
                    setError(err.message);
                    console.log(err.message);
                } finally {
                    // console.log("done");
                    setIsLoading(false);
                }
            }
            fetchDetails();
        },
        [movieSelectedId]
    );

    function btnBackHandler() {
        if (!title) return;
        setMovieSelectedId(null);
    }

    return (
        <div className="details">
            {error.length !== 0 && <ErrorMessage message={error} />}
            {isLoading && error.length === 0 && <Loader />}
            {!isLoading && error.length === 0 && (
                <>
                    <header>
                        <button
                            className="btn-back"
                            onClick={() => btnBackHandler()}
                        >
                            <IoArrowBackSharp />
                        </button>
                        <img src={poster} alt={`image of ${title}`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>
                                <HiMiniCalendarDateRange />
                                {releaased}
                            </p>
                            <p>
                                <MdAccessTimeFilled />
                                {runtime}
                            </p>
                            <p>
                                <LiaStarSolid />
                                {imdbRating} IMDB rating
                            </p>
                            <p>
                                <BiSolidCategoryAlt />
                                {genre}
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className="rating">
                            <StarRating
                                maxRating={10}
                                size={12}
                                onSetRating={setUserRating}
                            />
                            {userRating ? (
                                <AddWatched
                                    movie={movie}
                                    userRating={userRating}
                                    setWatched={setWatched}
                                    setMovieSelectedId={
                                        setMovieSelectedId
                                    }
                                />
                            ) : null}
                        </div>
                        <p className="plot">
                            <BsFileTextFill />
                            {plot}
                        </p>
                        <p className="actors">
                            <FaUserGroup />
                            {actors}
                        </p>
                        <p className="director">
                            <FaUser />
                            Directed by: {director}
                        </p>
                        {ratings?.map((rating) => (
                            <p
                                key={crypto.randomUUID()}
                                className="datials_rating"
                            >
                                <MdStarRate />
                                &nbsp;&nbsp;
                                {rating.Source}
                                &nbsp;&bull;&nbsp;
                                {rating.Value}
                            </p>
                        ))}
                    </section>
                    {/* {movieSelectedId}  */}
                </>
            )}
        </div>
    );
}

export default MovieDetails;
