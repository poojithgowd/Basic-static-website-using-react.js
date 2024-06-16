import React from "react";
import "./Cards.css";

const Cards = ({ title, image, price,addToCart}) => {
  return (
    <div className="border">
      <img src={image} alt={title}  style={{width:'300px', height:"300px"}}/>
      <h2>{title}</h2>
      <h2 >&#x20B9; {price}</h2>
      <button><h4>Buy now</h4></button>
          <button onClick={addToCart}><h4>Add to cart</h4></button>
    </div>
  );
};

export default Cards;
