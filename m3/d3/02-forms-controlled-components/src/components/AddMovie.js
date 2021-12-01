import { useState } from 'react';
import { v4 } from 'uuid';

function AddMovie({ addNewMovie }) {

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(1);
  const [hasOscars, setHasOscars] = useState(false);

  const handleTitle = (event) => setTitle(event.target.value);
  const handleDirector = (event) => setDirector(event.target.value);
  const handleRating = (event) => setIMDBRating(event.target.value);
  const handleOscars = (event) => setHasOscars(event.target.checked);

  const handleSubmit = (event) => {
    // Prevent the page reload (default behavior of the browser)
    event.preventDefault();

    // Get the data from the state/inputs
    const newMovie = {
      _id: v4(),
      director: director,
      IMDBRating: IMDBRating,
      hasOscars: hasOscars
    }

    console.log(`newMovie`, newMovie)

    addNewMovie(newMovie);
    
    // Clear the inputs
    setTitle("");
    setDirector("");
    setIMDBRating(1);
    setHasOscars(false);
  }

  
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label>Director:</label>
        <input type="text" name="director" value={director} onChange={handleDirector} />

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={IMDBRating} onChange={ handleRating} />

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={handleOscars} />
        
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;