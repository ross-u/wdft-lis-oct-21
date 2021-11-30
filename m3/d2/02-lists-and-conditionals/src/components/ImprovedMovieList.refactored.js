import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

function ImprovedMovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [isShowing, setIsShowing] = useState(true);


  const deleteMovie = (movieId) => {

    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    })

    setMovies(filteredMovies);
  }
  
  const toggleMovieList = () => {
    setIsShowing(!isShowing)
  }


  return (
    <>
      <button onClick={toggleMovieList}>
        { isShowing ? "Hide" : "Show"}
      </button>

      {
        isShowing && movies.map((movie) => (
          <MovieCard movieInfo={movie} deleteMovie={deleteMovie}/>
        ))
      }
    </>
  );
}

export default ImprovedMovieList;