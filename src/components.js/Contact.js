import React from "react";
import './Contact.css';
const Contact=()=>{
    return(
           <div className="wrapper form"> 
        <h2>Contact us</h2> 
        <div id="error_message"> 
  
        </div> 
        <form   > 
            <div className="input_field"> 
                <input type="text" 
                       placeholder="Name" 
                       id="name"/> 
            </div> 
            <div className="input_field"> 
                <input type="text" 
                       placeholder="Subject" 
                       id="subject"/> 
            </div> 
            <div className="input_field"> 
                <input type="text" 
                       placeholder="Phone" 
                       id="phone"/> 
            </div> 
            <div className="input_field"> 
                <input type="text" 
                       placeholder="Email" 
                       id="email"/> 
            </div> 
            <div className="input_field"> 
                <textarea placeholder="Message" 
                          id="message"> 
                </textarea> 
            </div> 
            <div className="btn"> 
                <input type="submit"/> 
            </div> 
        </form> 
    
        </div>
    )
}
export default Contact;