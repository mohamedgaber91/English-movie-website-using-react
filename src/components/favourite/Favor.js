import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MovieItem from "../movieItem/MovieItem"
import { clearLikes } from "../Redux/slices/LikeSlice"

import "./Favor.css"
function Favor(){
  const likemoviesNumber= useSelector((state)=>state.likeMovies.length)
  const likeMovies= useSelector((state)=>state.likeMovies)
  
  const count =likeMovies.length
  useEffect(()=>{
    localStorage.setItem("likeMovies" ,JSON.stringify(likeMovies))
  },[count])
  
   let dispatch=useDispatch()
    return(
        <>
            <div className="our-favor">
                <div className="container">
                   <div className="head">
                     <button onClick={()=>dispatch(clearLikes())} className="all-btn" id="all">delete all</button>
                     <div  className="numberOfMovies">{likemoviesNumber} movies</div>
                   </div>
                    
                    <div className="favor-content">
                        {count>0 ?
                            likeMovies.map((movie)=>
                                <MovieItem movie={movie} key={movie.imdbID} showAddBtn="false" deleteWatched="false" watched="false" showDislik="true"/>
                                )
                            
                             :<>
                                <div></div>
                                <p className='my-alert text-danger ms-0 mt-5'>you are not liked any movie  </p>
                                <div></div>
                             </>
                             
                        
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Favor