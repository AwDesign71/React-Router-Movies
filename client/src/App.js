import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <MovieList />

      {/* <div>Replace this Div with your Routes</div> */}
      <Route path='/Movies/MovieList/' component={MovieList} />
      <Route path='/Movies/Movie/' component={Movie} />
    </div>
  );
};

export default App;
