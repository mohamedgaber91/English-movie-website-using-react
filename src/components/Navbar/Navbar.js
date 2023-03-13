import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap"
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"
import "./Navbar.css"
function Navbar (){
    
    
    
    return(
        <nav className="navbar navbar-expand-lg our-navbar ">
            <div className="container">
                <a className="navbar-brand text-white fs-3" href="/">movies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/watchlist">watch list  </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/watched" >watched</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/favor">favourite movie </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

