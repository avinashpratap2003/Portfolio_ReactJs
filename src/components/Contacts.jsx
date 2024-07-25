import  './Contacts.css'
import { FaTelegramPlane } from "react-icons/fa";
import React, { useRef,useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {

  /* for email send function*/
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_95qv6hg', 'template_5v26ok3', form.current, {
        publicKey: 'OU31zMkuKdN6LMzBM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  /* for toast popup*/
  const notify = () => {
    toast("message sent successfully!");
    const initialFormData = {
      from_name: '',
      from_email: '',
      form_subject: '',
      message: '',
    };

  }
  return (
    <div id="contacts">
       <div  className="contact-section">
      <div className=" main-container ">
        <h1 className="contact-heading">Contact Me</h1>
        <div className="contact-sub-heading">Questions, thoughts, or just want to say hello?</div>
        <div className="contact-container">
          <form className="form" action=" "  ref={form} onSubmit={sendEmail}>
            <div className="formfield-container" >

              <input className="formfield"
              type="text"
              name="from_name"
              required
              id="" placeholder="Enter your name"/>
  
              <input className="formfield"
              type="email"
              name="from_email"
              required
              id="" placeholder="Enter your email adderss"/>
  
              <input className="formfield"
              type="text"
              name="form_subject"
              required
              id="" placeholder="Enter your subject"/>
  
              <textarea className="formfield formfield-textarea"
               name="message"
               id="" cols="30" rows="10" 
               required
               placeholder="Enter your message"></textarea>

            </div>
            <div>
              <button type="submit" className="button " id="submit-button"
                value="Send"  onClick={notify}>Send Message
              <a className='submit-icon' href=""> <FaTelegramPlane/></a>
              </button>
              <ToastContainer />
            </div>
  
          </form>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Contacts
