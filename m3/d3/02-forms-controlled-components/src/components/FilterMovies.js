import { useState } from 'react';

function FilterMovies({ filterMovieList }) {
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = (event) => {
    setFirstLetter(event.target.value);

    filterMovieList(event.target.value);
  }

  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>

      <select name="" value={firstLetter} onChange={ handleSelect } >
        <option value="All"> All </option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>

    </div>
  );
}

export default FilterMovies;