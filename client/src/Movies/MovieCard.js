import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  // const { title, director, metascore, stars } = movie;
  // const singleMovie=movieList.find(movie=> `${movie.id}` === id);
  return (
    <div className="movie-card">
      <h2><Link to={`/movies/${props.movie.id}`}>{props.movie.title}</Link></h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      <div className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;
