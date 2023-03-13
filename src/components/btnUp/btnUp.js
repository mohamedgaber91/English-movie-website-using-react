import "./btnUp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
function BtnUp (){
    window.onscroll=()=>{
        if(window.pageYOffset >500){
            document.getElementById("btn").style.display="block"
         
        }
        else{
            document.getElementById("btn").style.display="none"
        }
        document.getElementById("btn").onclick=()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }
    }
    return(
        <button className="btn-up" id="btn"><FontAwesomeIcon icon={faUpLong}/></button>
    )
}
export default BtnUp