import React from 'react'
const Rate=({rating,setSearchbyerate})=>{
 const stars=(x)=>
 {
 let star=[];
 for(let i=1; i<=5; i++)
   if(i<=x){
    star.push(<span style={{color:"rgb(219, 103, 7)",fontSize:20}} onClick={()=>setSearchbyerate(i)}>★</span>);
   }
else{
    star.push(<span style={{color:"rgb(219, 103, 7)",fontSize:20}} onClick={()=>setSearchbyerate(i)}>☆</span>);
}
return star;
 }

return(
<div>
{stars(rating)}
</div>
);
}


export default Rate;