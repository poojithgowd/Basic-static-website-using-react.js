import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'; // Assuming you're using an external CSS file
const Nav=()=>{
    return(
       <div className="nav-container">
        <img src="./logo.png" style={{width:"70px", height:"70px"}}  alt="no image"></img>
       <h1>Online Shopping</h1> 
        
            <h1 >
            <Link to='/'className='nav-link'>Home</Link> 
            <Link to='/login'className='nav-link'>Products</Link>
            <Link to='/contact'className='nav-link' >Contact</Link>
            <Link to='/about'className='nav-link' >About</Link>

            </h1>
            


        </div>
        
    )
}
export default Nav;