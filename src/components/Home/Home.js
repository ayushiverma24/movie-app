import React, { useEffect } from 'react';
import movieApi from '../../common/apis/movieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/movieApiKey';
const Home = () => {

    const movieText = 'Harry';
    const fetchMovies = async () => {
        const resp = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch(err=>{
            console.log("got error", err);
        })
        console.log("Response =  ",resp);
    }

    useEffect(() => {
fetchMovies();
    }, [])
    return (
        <div>
            <div>
                <img></img>
            </div>
            <MovieListing />
        </div>
    )
}

export default Home;