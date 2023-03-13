import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./MovieItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'


import { useDispatch } from 'react-redux';
import { addMovie, deleteMovie } from '../Redux/slices/dataReducer';
import { deleted, Watched } from '../Redux/slices/WatchedReducer';
import { addLike, disLike } from '../Redux/slices/LikeSlice';
function MovieItem(props){
    const dispatch =useDispatch()
   
    const ourButtons = document.querySelectorAll(".forDisable");
    
    let buttonPressed=(e)=>{
      
        e.target.classList.add("disabled")
     
    }
  ourButtons.forEach((btn)=>{
    btn.onclick=buttonPressed
  })
  
    let linkPressed=(e)=>{
      
        e.target.parentElement.classList.add("disabled")
     
    }
   const ourLinkButtons = document.querySelectorAll(".forDisable-link");
   ourLinkButtons.forEach((a)=>{
    a.onclick=linkPressed
  })
  

  
   const likes=document.querySelectorAll("#like")
   let likePressed= (e)=>{
     e.target.style.color="blue"
   }
   for(let like of likes){
    like.onclick=likePressed
   }
    function addItem(payload){
      dispatch(addMovie(payload))
    }
    
    function twoFunc(par1,par2){
     addItem(par1);
     
    }
  
    
    
    
    return(
        <div className="our-movie">
                    <Card style={{ width: '100%',display:'inline' }} className="our-card">
                        <Card.Img variant="top" src={props.movie.Poster} className='movie-img' />
                        <Card.Body>
                            <Card.Title>{props.movie.Title}</Card.Title>
                            <Card.Text>
                            {props.movie.Year}
                            </Card.Text>
                            
                              {  (props.showAddBtn==="true" ) ? <Button variant="primary" onClick={()=>twoFunc(props.movie)}  id='btn-add' className='forHover forDisable'><a className='vis forDisable-link'>add to watch list</a></Button>
                                :<></>}
                              {(props.WatchListDeleted==="true")?<Button className='btn btn-danger forHover forDisable'  id='btn-delete' onClick={()=>dispatch(deleteMovie(props.movie)) }><a className='vis forDisable-link'>delete  from watch list</a></Button>
                              :<></>
                              }
                              {(props.deleteWatched==="true")?<Button className='btn btn-danger forHover forDisable'  id='btn-delete' onClick={()=>dispatch(deleted(props.movie)) }><a className='vis forDisable-link'>hide from watched</a></Button> 
                              :<></>
                              }
                              {(props.watched==="false")?<></>
                              :<Button className='btn btn-secondary ms-2 text-white forHover forDisable' onClick={()=>dispatch(Watched(props.movie) ,dispatch(addMovie(props.movie))) }><a className='vis forDisable-link'>watch it</a></Button>
                              }
                              {(props.likedShow==="true")?<FontAwesomeIcon icon={faThumbsUp} id="like"  onClick={()=>dispatch(addLike(props.movie))}/>
                              :<></>
                              }
                              {
                                (props.showDislik==="true")?<FontAwesomeIcon icon={faThumbsDown} className="dislike " onClick={()=>dispatch(disLike(props.movie))}/>
                              :<></>
                              }
                              
                              
                        </Card.Body>  
                    </Card>

                            
                        
        </div>
      
    )
}
export default MovieItem