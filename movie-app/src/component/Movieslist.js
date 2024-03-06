import React from 'react';
import MovieCard from './Moviescard';

const MovieList = (props) => {
    console.log("movies:",props.movies)
  return (
    <div>
      {props.movies.map(movie=> <MovieCard movie={movie}/> )}
    </div> 
  );
};

export default MovieList;