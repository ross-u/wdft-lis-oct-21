import { useState } from 'react';
import moviesData from './../movies-data.json';

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
          <div key={movie._id} className="MovieCard">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.IMDBRating}</p>

            <button
              className="btn-delete"
              onClick={() => deleteMovie(movie._id) }
            >
              Delete
            </button>
          </div>
        ))
      }

    </>
  );
}

export default MovieList;