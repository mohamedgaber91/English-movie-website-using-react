import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MovieItem from "../movieItem/MovieItem"
import { clearWatched } from "../Redux/slices/WatchedReducer"
import "./Watched.css"
function Watched(){
  const watchedNumber= useSelector((state)=>state.watched.length)
  const watchedMovies= useSelector((state)=>state.watched)
  const state= useSelector((state)=>state)
   const count =watchedMovies.length
   useEffect(()=>{
    localStorage.setItem("watchedMovies" , JSON.stringify(watchedMovies))
   },[state])
   let dispatch= useDispatch()
    return(
        <>
            <div className="our-watched">
                <div className="container">
                   <div className="head">
                        <button onClick={()=>dispatch(clearWatched())} className="all-btn" id="all">delete all</button>
                        <div  className="numberOfMovies">{watchedNumber} movies</div>
                   </div>
                    
                    <div className="watched-content">
                        {count>0 ?
                                watchedMovies.map((movie)=>
                                <MovieItem movie={movie} key={movie.imdbID} showAddBtn="false" deleteWatched="true" watched="false" likedShow="true"/>
                                )
                            
                             :<>
                                <div></div>
                                <p className='my-alert text-danger ms-0 mt-5'>you are not watched any movie  </p>
                                <div></div>
                             </>
                             
                        
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Watched