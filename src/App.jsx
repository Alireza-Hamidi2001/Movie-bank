import { useEffect, useState } from "react";

import Header from "./features/ui/Header";
import AppContainer from "./features/app/AppContainer";
import Footer from "./features/ui/Footer";

import { tempMovieData } from "./features/ui/data";

const KEY = "c9bd75bc";
const TEMP_QUERY = "mission impossible";
export default function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");

    const [movieSelectedId, setMovieSelectedId] =
        // useState("tt21276878");
        useState(null);

    useEffect(
        function () {
            const controller = new AbortController();
            async function fetchMovies() {
                try {
                    setIsLoading(true);
                    setError("");
                    const res = await fetch(
                        // `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
                        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    );
                    // console.log(res);
                    if (!res.ok)
                        throw new Error("something went wrong");
                    const data = await res.json();
                    if (data.Response === "False")
                        throw new Error("Movie not found");
                    setMovies(data.Search);
                    setIsLoading(false);
                    setError("");
                } catch (err) {
                    // err.name - err.message
                    console.error(err.message);
                    if (err.name !== "AbortError")
                        setError(err.message);
                } finally {
                    setIsLoading(false);
                }
            }
            fetchMovies();
            return function () {
                controller.abort();
            };
        },
        [query]
    );

    return (
        <>
            <Header
                movies={movies}
                query={query}
                setQuery={setQuery}
            />
            <AppContainer
                isLoading={isLoading}
                movies={movies}
                query={query}
                error={error}
                movieSelectedId={movieSelectedId}
                setMovieSelectedId={setMovieSelectedId}
            />
            <Footer />
        </>
    );
}
