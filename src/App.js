import './App.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {Routes, Route} from "react-router-dom";

import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

import axios from "axios";
// import .env from "dotenv"

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params ={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
// axios.defaults.params["api_key"] = "72d38aebb5ec2d61ec4961c122eb68b2";


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/playPage' element={<PlayPage/>}/>
    </Routes>
  );
}

export default App;
