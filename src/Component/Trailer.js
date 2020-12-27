import {movieData} from "../DataMovie"
import {useParams,Link} from "react-router-dom"
const Trailer=()=>{
    const {movieName}=useParams()
    
    return(
        <div className="trailer">
            
            <p style={{fontSize:"16px"}}> {movieData.find(el=>el.name===movieName).description}</p>
            <iframe title="Trailer" width="853" height="480" src={movieData.find(el=>el.name===movieName).video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button className="Modal-btn"  onClick={(e)=>e.preventDefault()}>
             <Link style={{textDecoration:'none', color:'white'}} to='/'>Back</Link>
            </button>
        </div>
    );
}
export default Trailer;