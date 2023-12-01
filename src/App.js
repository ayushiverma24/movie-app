import "./App.scss";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Header from "../src/Components/Header/Header";
import MovieDetails from "../src/Components/MovieDetails/MovieDetails";
import PageNotFound from "../src/Components/PageNotFound/PageNotFound";
import Footer from "../src/Components/Footer/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie-details/:imdbID" element={<MovieDetails />} />
            <Route path="/pageNotFound" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
