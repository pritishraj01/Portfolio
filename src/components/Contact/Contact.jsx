import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'

function Contact() {
  return (
    <div id='contact'>
      <div className="left-contact">
         <img src={contact} alt="" />
      </div>
      <div className="right-contact">
       <form action="https://formspree.io/f/mrblealq" method="POST">
        <input name='Username' type='text' placeholder='Name'/>
        <input name='Email' type='text' placeholder='Email'/>
        <textarea name='Message' type='text' placeholder='Message Me'/>
        <button id='btn'>submit</button>
       </form>
      </div>
    </div>
  )
}

export default Contact
Contact