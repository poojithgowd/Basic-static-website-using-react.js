import React from "react";
import Cards from "./Cards";
import Data from "./Data";
import "./Cards.css"
const Login=({addToCart})=>{
    return(
        <div className="cards">
            {Data.map(e=>{
                 return(
                    <div key={e.id}>
                         <Cards title={e.title} image={e.image} price={e.price} addToCart={()=>addToCart(e)}/>
                    </div>
                 )
            })}           
        </div>
    )
}
export default Login;