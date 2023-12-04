import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Movielisting from "../MovieListing/Movielisting";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <>
      <div className="banner-img"></div>
      <Movielisting />
    </>
  );
};

export default Home;
