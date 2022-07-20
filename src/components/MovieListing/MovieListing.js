import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { getAllMovies } from '../../features/movies/movieSlice'
const MovieListing =()=>{

    const movies  = useSelector(getAllMovies);
    console.log("movies  = ",movies);

    return(
        <div>
            MovieListing
        </div>
    )
}

export default MovieListing;