// src/components/MovieList.js

import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from './AddMovie';
import FilterMovies from "./FilterMovies";


function MovieList() {
  const [allMovies, setAllMovies] = useState(moviesDataJSON); // master array with all the movies
  const [movies, setMovies] = useState(moviesDataJSON);   // array of movies that are rendered/shown

  const addNewMovie = (movieObj) => {
    // update the array of movies shown
    const updatedMovies = [movieObj, ...movies];

    // update the master array with all the movies
    const updatedAllMovies = [movieObj, ...allMovies];

    // update the state
    setMovies(updatedMovies);
    setAllMovies(updatedAllMovies);
  }

  const filterMovieList = (char) => {
    let filteredMovies;
    if (char === "All") {
      filteredMovies = allMovies;
    }
    else {
      filteredMovies = allMovies.filter((oneMovie) => {
        return oneMovie.title[0].toLowerCase() === char.toLowerCase();
      })
    }

    setMovies(filteredMovies);
  }

  return (
    <div>
      <h2>Movie List</h2>

      <AddMovie addNewMovie={addNewMovie} />

      <FilterMovies filterMovieList={filterMovieList} />

      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
