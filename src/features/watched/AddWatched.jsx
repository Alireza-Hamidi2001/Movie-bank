function AddWatched({
    movie,
    setWatched,
    setMovieSelectedId,
    userRating,
}) {
    function addWatchedHandler() {
        const newMovie = {
            ...movie,
            userRating: userRating,
        };
        setWatched((prev) => [...prev, newMovie]);
        setMovieSelectedId(null);
    }
    console.log(movie);

    return (
        <button
            className="btn-add"
            onClick={() => addWatchedHandler()}
        >
            Add Watch
        </button>
    );
}

export default AddWatched;
