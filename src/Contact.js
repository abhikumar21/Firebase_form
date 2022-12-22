
import React, { useState } from 'react'
import './Contact.css';

export default function Contact() {

const[User, setUser] = useState({
    naam:"", 
    email:"",
    address:"",
    mobile:"",
    message:"",
});

let name, value;
const getUserData= (event) => {
    name= event.target.name;
    value= event.target.value;

    setUser({...User, [name]: value});
};




const postData= async(e) => {
     e.preventDefault();

     const {naam, email,address,mobile,message,} =User;

   const res = await fetch(process.env.FIRELINK, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      naam, 
      email,
      address,
      mobile,
      message,
    })
   })

   if(res) {
     setUser({
      naam:"", 
      email:"",
      address:"",
      mobile:"",
      message:"",
     });
     alert("Data Stored");
   }
};



  return (
    <div className='contact'>
      <h2>Contact Us</h2>
  
    <form className='contact-form' method="post">
    <div className="form">

     <div className='f'>
      <label for="Username">Your Name</label><br></br>
      <input type="text" name="naam" id="naam" autoComplete="off" value={User.naam} onChange={getUserData} placeholder='Enter your name' required></input>
      </div>

      <div className='f'>
        <label for="mobile_no">Mobile No</label><br></br>
        <input type="number" name="mobile" id="mobile" autoComplete='off' value={User.mobile} onChange={getUserData} placeholder='Enter your mobile no.' required></input>
      </div>

      <div className='f'>
        <label for="email_id">E-Mail</label><br></br>
        <input type="text" name="email" id="email" autoComplete='off' value={User.email} onChange={getUserData} placeholder='Enter e-mail id' required></input>
      </div>

      <div className='f'>
        <label for="address">Address</label><br></br>
        <input type="text" name="address" id="address" autoComplete='off' value={User.address} onChange={getUserData} placeholder='Enter your address' required></input>
      </div>

      <div className='f'>
        <label for="message">Message</label><br></br>
        <input type="text" name="message" id="message" autoComplete='off' value={User.message} onChange={getUserData} placeholder='type a message' required></input>
      </div>

      </div>

    <div className='button'>
       <button className='btn' onClick={postData}>Submit</button>
       {/* <button className='btn' onClick={showData}>Show</button> */}

    </div>

    </form>
      

  
      
    </div>
  )
}
