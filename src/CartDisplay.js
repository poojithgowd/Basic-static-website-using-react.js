import React from 'react'

const CartDisplay = ({cart}) => {
    function removeCart(item){

    }
    function incHandler(item){
  
    }
    function decHandler(item,id){
      // cart.filter(item.id !== index)
    }
  return (
    <div>
        <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
               <div className="border">
                    <img src={item.image} alt={item.title}  style={{width:'300px', height:"300px"}}/>
                    <h2>{item.title}</h2>
                    <h2 >&#x20B9; {item.price}</h2>
                    <button onClick={incHandler}>+</button>
                    <button onClick={decHandler}>-</button>
                    <br/>
                    <button ><h4>Buy now</h4></button>
                    <button onClick={removeCart}><h4>Del cart</h4></button></div>
                    
            </li>
          ))}
        </ul>
      )}

     
    </div>
  )
}

export default CartDisplay
