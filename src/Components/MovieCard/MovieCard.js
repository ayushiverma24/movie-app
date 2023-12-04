import React from "react"
import './MovieCard.scss';
import {Link} from 'react-router-dom';
const MovieCard =(props)=>{
    const { Title, Year, imdbID} = props.movieDetail;
    return(
        <div className="card-outer-container">
            <Link to={`/movie-details/${imdbID}`}>
            <div className="card-inner-container">
                <div className="movie-image-container">
                    <img src={props.movieDetail.Poster} alt='movie-poster'/>
                </div>
                <div className="card-info">
                <h5>{Title}</h5>
                <p>{Year}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default MovieCard