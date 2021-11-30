const generateScoreLabel = (score) => {
  if (score > 9) {
    return <span className="green">9+</span>
  }
  else if (score < 7) {
    return <span className="red">{score}</span>
  }
  else {
    return <span className="black">{score}</span>
  }
}

function MovieCard({ movieInfo, deleteMovie }) {  // props.movieInfo
  return (
    <div className="MovieCard">
      <h3>{movieInfo.title}</h3>
      <p>Director: {movieInfo.director}</p>
      {/* <p>Rating: {movieInfo.IMDBRating}</p> */}
      <p>Rating: {generateScoreLabel(movie.IMDBRating)}</p>


      {/* 
      {movieInfo.hasOscars ? <p>Won Oscars 😀</p> : <p>No oscars</p>} 
      */}
      
      {/* If the value on the left side of && is true, the content is rendered */}
      {movieInfo.hasOscars && <p>Won Oscars 😀 🏆 </p>}
      
      {!movieInfo.hasOscars && <p> No oscars😞</p>}


      <button
        className="btn-delete"
        onClick={() => deleteMovie(movieInfo._id) }
      >
        Delete
      </button>
    </div>
  );
}

export default MovieCard;