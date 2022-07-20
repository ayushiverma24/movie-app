import React, { useEffect } from 'react';
import movieApi from '../../common/apis/movieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/movieApiKey';
import { addMovies } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux/es/exports';
const Home = () => {

    const movieText = 'Harry';
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const resp = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch(err => {
                console.log("got error", err);
            })
        dispatch(addMovies(resp.data))
    }

    useEffect(() => {
        fetchMovies();
    }, [])
    return (
        <div>
            <div>
                {/* <img></img> */}
            </div>
            <MovieListing />
        </div>
    )
}

export default Home;