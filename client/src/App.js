import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path='/' render={props => {console.log(props); return <MovieList {...props}/>}}/>
        <Route path='/movies/:id' exact render={props => {console.log(props); return <Movie {...props}/>}}/>
      </div>
    </div>
  );
};

export default App;
