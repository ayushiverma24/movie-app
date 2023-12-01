import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const Movielisting = () => {
  const movies = useSelector(getAllMovies);
  console.log("ayushi", movies);
  let renderMoviCard;
  renderMoviCard =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard movieDetail={movie} key={index} />;
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
      </div>
    </>
  );
};

export default Movielisting;
