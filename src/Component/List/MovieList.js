import React from 'react'
import MovieCard from '../Card/MovieCard';
import './list.css';


const MovieList=({moviesList,searchbyname,searchbyrate})=>{


return(
<div className="movielist">
{moviesList.filter(el=>el.name.toLowerCase().includes(searchbyname.toLowerCase().trim())&&el.rating>=searchbyrate).map((movie,i)=>(<MovieCard key={i} movie={movie}/>))};

</div>
);
}
export default MovieList;