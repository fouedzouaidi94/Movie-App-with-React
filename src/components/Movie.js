import React from "react";
import Raiting from './Rating'


const Movie = (props) => {

  return (
    <div className="movie">
      {props.movie.map(e =>
      
         <img width="200" alt={e.Title} src={e.poster}/>
      
      )}
    </div>
  );
};


export default Movie;