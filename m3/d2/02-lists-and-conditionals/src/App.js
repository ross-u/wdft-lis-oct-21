import { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import MovieList from './components/MovieList';
import ImprovedMovieList from './components/ImprovedMovieList';
import Spinner from './components/Spinner';


function App() {
  const [isLoading, setIsLoading] = useState(false);


  if (isLoading) {
    return <Spinner />
  }
  else {

    return (
      <div className="App">
      <ImprovedMovieList />

      {/* <MovieList /> */}

      {/* <StudentList /> */}
    </div>
  );
}
}

export default App;
