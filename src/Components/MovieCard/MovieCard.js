import React from "react"
import './MovieCard.scss';
const MovieCard =(props)=>{
    console.log(props);
    const {Poster, Title, Type, Year} = props.movieDetail;
    return(
        <div className="card-outer-container">
            <div className="card-inner-container">
                <div className="movie-image-container">
                    <img src={props.movieDetail.Poster} alt='movie-poster'/>
                </div>
                <div className="card-info">
                <h5>{Title}</h5>
                <p>{Year}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard