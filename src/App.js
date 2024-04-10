import React, { useState } from 'react';
import { useEffect } from 'react';
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';

//c23f537d
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=c23f537d'

const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }


const App = () => {
  const [movies, setMovies] = useState([])

  //useEffect hook loads api right at the start
  //accepts search title of movie then calls api
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    //the const below gets data from response of api so move data is inside the data object
    const data = await response.json();
    setMovies(data.Search)
  } 
  useEffect(() => {
    searchMovies('superman'); //calls searchmovies with example title
  }, []);

  //input div must have placeholder, value and interaction like onchange that accepts callback to recall api
  return (
    <div className='app'>
      <h1>Movieland</h1>
      <div className='search'>
        <input
          placeholder="Search for movies"
          value="Superman" //query that is entered in the searchbar
          onChange= {() => {}} //calls api
          >    
        </input>
        <img
          src={SearchIcon} //adds magnifying glass icon to end of searchbar
          alt="search" //for screen readers
          onClick={() => {}} //call api from here
          >
        </img>
      </div>

      { //checks to see if movie exists by making sure that movie length is greater than 0.
        //Conditional if movie length over 0 then show each movie inside card by map.
        //else show not found.
        //map takes each movie in array and applies MovieCard to it.
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
            
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;
