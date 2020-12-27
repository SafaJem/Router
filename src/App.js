import React,{useState} from 'react'
import {movieData} from "./DataMovie"
import './App.css';
import MovieList from './Component/List/MovieList';
import AddMovie from './Component/Add/AddMovie';
import Filter from './Component/Filter/Filter';
import {BrowserRouter as Router,Route,} from 'react-router-dom'

import Trailer from './Component/Trailer';

function App() {
const [moviesList,setMoviesList]=useState(movieData)
const [searchbyname,setSearchbyename]=useState("")
const [searchbyrate,setSearchbyerate]=useState(1)

const addMovie=(x)=>
{
  setMoviesList([...moviesList,x])
}
  return (
 

<div className="App">
    <Router>
    <Route exact path="/">
      <Filter setSearchbyename={setSearchbyename} setSearchbyerate={setSearchbyerate} searchbyrate={searchbyrate}/>
      <MovieList moviesList={moviesList} searchbyname={searchbyname} searchbyrate={searchbyrate}/>
      <div style={{display:'flex',justifyContent:'center'}}>
      <AddMovie addMovie={addMovie} />
      </div>
      </Route>
    <Route path='/movie/:movieName' component={Trailer}></Route>
    </Router>
    </div>
  );
}

export default App;