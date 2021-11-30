import { useState } from 'react';
import moviesData from '../movies-data.json';

import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {

    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    })

    setMovies(filteredMovies);
  }
  
  return (
    <>
      {
        movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movieInfo={movie}
            deleteMovie={deleteMovie}
          />))
      }
    </>
  );
}

export default MovieList;