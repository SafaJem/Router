import React from 'react'
import Rate from '../Rate';
import './filter.css';
const Filter=({setSearchbyename,setSearchbyerate,searchbyrate})=>{
return(
<div>
<div className="searchbyrating">
<input type="text" placeholder="Enter your movie name to search" onChange={(e)=>setSearchbyename(e.target.value)}/>  
</div>
<div className="searchbyname">
<Rate setSearchbyerate={setSearchbyerate} rating={searchbyrate}/>  
</div>
</div>
);
}
export default Filter;