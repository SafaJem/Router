import React from 'react'
import './card.css';
import {Link} from 'react-router-dom'
import Rate from '../Rate';
const MovieCard=({movie:{image,rating,name,date,description,video}})=>{
return(
<div className="card">
<div className="cardleft">
<img src={image} alt="poster"/>
</div>
<div className="cardright">
<h1>{name}</h1>
<div className="carddetails"> 
<p>Release Date : {date}</p>
<Rate rating={rating}/>
<p>{description}</p>
<button className="Modal-btn" onClick={(e)=>e.preventDefault()}>
<Link style={{textDecoration:'none', color:'white'}} to={`/movie/${name}`}>watch Trailer</Link>
</button>
</div>
</div>
</div>
);
}
export default MovieCard;