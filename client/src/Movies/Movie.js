import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {  
      //grab the id from the URL for whichever movie is selected
    const id = props.match.params.id; 
    
       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          //console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    // You will NEED to add a dependency array to this effect hook
  },[props.match.params.id]);
  
  // pass the `addToSavedList` function to the `Movie` component
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
    {/* //   <div className="movie-card">
    //     <h2>{title}</h2>
    //     <div className="movie-director">
    //       Director: <em>{director}</em>
    //     </div>
    //     <div className="movie-metascore">
    //       Metascore: <strong>{metascore}</strong>
    //     </div>
    //     <h3>Actors</h3>

    //     {stars.map(star => (
    //       <div key={star} className="movie-star">
    //         {star}
    //       </div>
    //     ))}
    //   </div>
      <div className="save-button">Save</div> */}
    </div>
  );
}

export default Movie;
