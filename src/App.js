import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className='app'>
      <Router>
      <Header />
       <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/movie/:imdbID' element={<MovieDetails/>}></Route>
          <Route exact path='/404' element={<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
