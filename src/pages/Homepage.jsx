import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContext";

const HomePage = () => {
    const { movieList } = useMovies();
    
    const movies = movieList;
    return (
        <>
            <h1 className="text-danger">Boollywood</h1> 
            <h2> <i>I like to movie it movie it</i> </h2>
            <div className="row gy-4">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={`movie-${movie.id}`} />
                ))}
            </div>
        </>
    );
};

export default HomePage;