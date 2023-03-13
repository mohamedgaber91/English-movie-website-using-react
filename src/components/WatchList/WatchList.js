import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MovieItem from "../movieItem/MovieItem"
import { clearWatchList } from "../Redux/slices/dataReducer"
import "./WatchList.css"
function WatchList(){
  const movie= useSelector((state)=>state.whatchlist)
  const state= useSelector((state)=>state)
  useEffect(()=>{
   localStorage.setItem("watchlist" ,JSON.stringify(movie))
  }, [state])
  let count = movie.length
  const moviesNumber= useSelector((state)=>state.whatchlist.length)
   let dispatch=useDispatch()
    return(
        <>
            <div className="our-watchlist">
                <div className="container">
                   <div className="head">
                        <button onClick={()=>dispatch(clearWatchList())} className="all-btn" id="all">delete all</button>
                        <div  className="numberOfMovies">{moviesNumber} movies</div>
                   </div>
                    
                    <div className="watch-content">
                        {count>0?
                                
                                movie.map((movie,index)=>
                                <MovieItem movie={movie} key={index} showAddBtn="false" WatchListDeleted="true"/>
                                )
                            
                             :
                             <>
                                <div></div>
                                <p className='my-alert text-danger mt-5'>your watch list is empty </p>
                                <div></div>
                                
                             </>
                             
                        
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default WatchList