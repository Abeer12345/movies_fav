import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Home from './home';
import Details from './details';
import NavBar from './NavBar';

export const App = () => {
  const [movies, setMovies] = useState([])


  return (
    <div>
      {/* <NavBar/> */}
      <Navigate to='/home' />
      <Routes>
        <Route path='/home' element={<Home setMoviesH={setMovies} />} ></Route>
        <Route path='/movie_details/:id' element={<Details movies={movies} />} ></Route>

      </Routes>

    </div>
  )
}
export default App