import React from "react";
import { useMovies } from '../context/MovieContext';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { movieList } = useMovies();
  const { id } = useParams();
  const movie = movieList.find(m => m.id === parseInt(id));

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <img src={movie.image} alt={movie.title} className="movie-poster"/>
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <h1>Titolo: {movie.title}</h1>
          <h4>Anno: {movie.year}</h4>
          <h4>Genere: {movie.genre}</h4>
          <h4>Descrizione film: {movie.description}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;