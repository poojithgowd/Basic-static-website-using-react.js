import React, { useState } from "react";
import Home from "./components.js/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import About from "./components.js/About";
import Login from "./components.js/Login";
import Contact from "./components.js/Contact"
import './App.css';
import CartDisplay from "./CartDisplay";
const App=()=>{
  const [cart,setCart]=useState([])

  const addToCart=(product)=>{
    setCart([...cart,product])
  };

  return(
    <div >
      <BrowserRouter>
      <Nav cart={cart}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login addToCart={addToCart}/>}/>       
      <Route path="/cart" element={<CartDisplay cart={cart}/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  )
}
export default App;
