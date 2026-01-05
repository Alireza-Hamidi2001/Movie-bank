import Box from "../Box";
import ErrorMessage from "../error_handling/ErrorMessage";
import Loader from "../ui/Loader";
import MovieList from "../movie/MovieList";
import StartSearching from "../error_handling/StartSearching";
import WatchedList from "../watched/WatchedList";
import MovieDetails from "../MovieDetails";
import { useState } from "react";

function AppContainer({
    movies,
    isLoading,
    error,
    query,
    movieSelectedId,
    setMovieSelectedId,
}) {
    const [watched, setWatched] = useState([]);

    return (
        <main className="main">
            <Box>
                {!isLoading && query.length === 0 && (
                    <StartSearching />
                )}
                {isLoading && <Loader />}
                {!isLoading && !error && (
                    <MovieList
                        setMovieSelectedId={setMovieSelectedId}
                        movies={movies}
                    />
                )}
                {error && query.length !== 0 && (
                    <ErrorMessage message={error} />
                )}
            </Box>
            <Box>
                {movieSelectedId ? (
                    <MovieDetails
                        movieSelectedId={movieSelectedId}
                        setMovieSelectedId={setMovieSelectedId}
                        setWatched={setWatched}
                    />
                ) : (
                    <WatchedList watched={watched} />
                )}
            </Box>
        </main>
    );
}

export default AppContainer;
