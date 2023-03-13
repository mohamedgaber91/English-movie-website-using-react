import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from 'react';
import "./Home.css"
import axios from 'axios';
import MovieItem from '../movieItem/MovieItem';
import { useSelector } from 'react-redux';
function Home (){

    const [searchValue,setsearchValue]=useState("")
    const [searchResults,setsearchResults]=useState([])

   
      
    useEffect(()=>{
        if (searchValue==="") {
            // nothing
        }
        else{
            fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=148f7e34`)
            .then((respons)=>respons.json())
            .then((data)=>{
                if (data) {
                setsearchResults(data.Search)
            }
            } 
            )
            
        }
         
    },[searchValue])
    
    return(
        <div className='our-search'>
            <div className='container'>
                <div className='search-content'>
                     <h1 className='h1'>search about your favourit english movie</h1>
                     <div className='box'>
                         <input type="search" title='search' placeholder="find your movie "  id="search" className="form-control"/>
                         <button className='btn btn-primary btn-search' onClick={()=>setsearchValue(document.getElementById("search").value)}>search</button>
                     </div>
                </div>
                <div className='movies mt-5 '>
                    <div className='movie-content'>
                        {searchResults?
                                searchResults.map((movie)=>
                                <MovieItem movie={movie} key={movie.imdbID} showAddBtn="true"/>
                                )
                            
                             :<>
                                <div></div>
                                <p className='my-alert text-danger'>sorry movie not found </p>
                                <div></div>
                             </>
                             
                        
                        }
                    </div>
                        
                   
                     
                </div>
               
            </div>
        </div>
        
    )
}
export default Home