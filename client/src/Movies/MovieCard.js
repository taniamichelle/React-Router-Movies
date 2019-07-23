import React from 'react';

const MovieCard = props => {
  const id=props.match.params.movieId;
  // const singleMovie=movieList.find(movie=> `${movie.id}` === id);
  return;
  // <div className="movie-card">
  //     <Link to={`/movies/${movie.id}`} key={movie.id}/>
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
};

export default MovieCard;
