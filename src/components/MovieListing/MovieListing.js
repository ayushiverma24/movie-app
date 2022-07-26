import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
const MovieListing =()=>{

    const movies  = useSelector(getAllMovies);
    let renderMovies = '';
    console.log("movies from movilisting =  ",movies.Search);
    renderMovies = movies.Response === "True" ? 
    (
        movies.Search.map((movie, index)=>(
            <MovieCard key={index} data={movie}/>
        ))
    ) 
    : (<div><h1>Got an Error</h1></div>)
    return(
        <div>
           
            <div>
                <h1>Movies Are</h1>

                {renderMovies}
            </div>
        </div>
    )
}

export default MovieListing;