import React from 'react'

//can put 'props' in round brackets but then have to put props. in front of 
//all the object references. So can destructure props by putting in curly braces inside round braces
//and call it the object. ie 'props' vs 'movie1'
const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.co/400'} alt={movie.Title}></img>
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard
