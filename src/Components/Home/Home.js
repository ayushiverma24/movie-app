import React, { useEffect } from "react"
import movieApi from '../../common/apis/movieApi'
import {API_KEY }from '../../common/apis/movieApiKeys'
import {useDispatch} from 'react-redux';
import { addMovies } from "../../features/movies/movieSlice";
import Movielisting from "../MovieListing/Movielisting";
const Home =()=>{
    const movieText='harry';
    const dispatch =useDispatch();
useEffect(()=>{
    const fetchMovies = async()=>{
        const resp = await movieApi
        .get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`)
        .catch((error)=>{
            console.log("Errror whiel callling API", error);
        })
        console.log("Response = ", resp);
        dispatch(addMovies(resp.data));
    }
    fetchMovies();
},[])
    return(
        <>
        <div className="banner-img"></div>
        <Movielisting/>
        </>
    )
}

export default Home