import "./App.scss";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {createRoot} from 'react-dom/client'
import Home from "../src/Components/Home/Home";
import Header from "../src/Components/Header/Header";
import MovieDetails from "../src/Components/MovieDetails/MovieDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "movie-details", element: <MovieDetails /> },
]);
const App = () => {
 createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
 )
};

export default App;
