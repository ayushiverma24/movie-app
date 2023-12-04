import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const Movielisting = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
console.log('ay', shows);

const movieResponse = movies?.Response;
const movieList =  movies?.Search;
const showResponse = shows?.Response;
const showList = shows?.Search;
  let renderMoviCard, renderShowCard='';
  renderMoviCard =
   movieResponse === "True" ? (
     movieList.map((movie, index) => {
         return <MovieCard movieDetail={movie} key={index} />;
      })
    
    ) : (
      <div>Error loading movies</div>
    );
    renderShowCard = 
    showResponse === "True" ? (
      showList.map((show, index) => {
          return <MovieCard movieDetail={show} key={index} />;
       })
     
     ) : (
       <div>Error loading movies</div>
     );
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movie List</h2>
          <div className="movieList-block">{renderMoviCard}</div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="showList-block">{renderShowCard}</div>
        </div>
      </div>
    </>
  );
};

export default Movielisting;
