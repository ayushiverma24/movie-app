import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getDetails,
} from "../../features/movies/movieSlice";
import "./MovieDetails.scss";
const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(getDetails);
  const { Title, Year, Rated, imdbRating, imdbVotes, RunTime, Plot, Poster } =
    details;
  console.log("the details =", details);
  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));
  }, [dispatch, imdbID]);
  return (
    <>
      <div className="movie-heading">
        <h1>{Title}</h1>
      </div>
      <div className="details-section">
        <div className="left-panel-details">
        <div className="movie-poster">
            <img src={Poster} />
          </div>
         </div>
        <div className="right-panel-details">
          <div className="movie-info-section">
            <div className="rating">
              <div>IMDB Rating :</div>
              <div>{imdbRating}</div>
            </div>
            <div className="voting">
              <div>IMDB Voting :</div>
              <div>{imdbVotes}</div>
            </div>
            <div className="duration">
              <div>Duration :</div>
              <div>{RunTime}</div>
            </div>
          </div>
          <div className="movie-paragraph">
            <p>{Plot}</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default MovieDetails;
