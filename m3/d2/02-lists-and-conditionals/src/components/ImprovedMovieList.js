import { useState } from 'react';
import moviesData from '../movies-data.json';

const renderScoreLabel = (score) => {
  if (score > 9) {
    return <span className="green">{score}</span>
  }
  else if (score < 6) {
    return <span className="red">{score}</span>
  }
  else {
    return <span className="black">{score}</span>
  }
}  


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
          <div key={movie._id} className="MovieCard">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Rating: { renderScoreLabel(movie.IMDBRating) }</p>
            
            {/* If the value on the left side of && is true, the content is rendered */}
            {movie.hasOscars && <p>Won Oscars 😀 🏆 </p>}
            
            {!movie.hasOscars && <p> No oscars😞</p>}

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

export default ImprovedMovieList;