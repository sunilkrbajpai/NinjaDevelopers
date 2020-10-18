import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {db } from './firebase'

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");

  const [loader,setLoader]=useState(false)
  const databaseAdd=(e)=>{
    setLoader(true)
    db.collection('contacts').add({
      name:name,
      email:email,
      phone:phone,
      message:message,
    })
    .then(()=>{alert('Message send successfully!')
    setLoader(false)

  }).catch((err)=>{
      alert(err.message)
      setLoader(false)

    })
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

  function sendEmail(e) {
    e.preventDefault();
    databaseAdd()
    emailjs.sendForm('gmail', 'template_x0coj7r', e.target, 'user_cn1fSJ6hnptnHWZVimax4')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="App">
              <form onSubmit={sendEmail} method="post" role="form" className="php-email-form" >
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" required className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  </div>
                  <div class="col-md-6 form-group">
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" required name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  </div>
                </div>
                <div className="form-row">
  
                <div className="col-md-6 form-group">
                  <input type="text" onChange={(e)=>{setPhone(e.target.value)}} className="form-control" required name="phone" pattern="[1-9]{1}[0-9]{9}" id="subject" placeholder="Phone number (10 digit)" data-rule="minlen:4"  data-msg="Please enter your phone number" />
                </div>
  
                <div className="col-md-6 form-group">
                  <select className="form-control" id="exampleFormControlSelect1" name="category">
                    <option>Individual</option>
                    <option>Company</option>
                  </select>
                </div>
              </div>
  
                <div className="form-group">
                  <textarea onChange={(e)=>{setMessage(e.target.value)}} className="form-control" required name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                </div>
                
                <div className="text-center"><button type="submit" style={{background:loader?"#ccc":""}}>Send Message</button></div>
              </form>
      </div>
  );
}

export default App;
