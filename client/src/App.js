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
          {/*created path that loads the MovieList component. made an inline fxn to pass props from Route tag to MovieList*/}
        <Route exact path='/' render={props => {console.log(props); return <MovieList {...props}/>}}/>
          {/*created path that loads the Movie component. made an inline fxn to pass props from Route tag to Movie*/}
        <Route path='/movies/:id' exact render={props => {console.log(props); return <Movie {...props}/>}}/>
      </div>
    </div>
  );
};

export default App;
