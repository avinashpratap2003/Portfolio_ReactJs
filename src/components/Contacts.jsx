import  './Contacts.css'
import { FaTelegramPlane } from "react-icons/fa";
import React, { useRef,useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    form_subject: '',
    message: '',
  });
 // Check if all fields are filled
  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // for email send function
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
       // Show toast message if form is valid
      if(isFormValid){
        toast.success('message sent successfully!');
       // Clear the form after submission
        setFormData({
          from_name: '',
          from_email: '',
          form_subject: '',
          message: '',
          });
      }
  };

  
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
              value={formData.from_name}
              onChange={handleChange}   
              required
              id="" placeholder="Enter your name"/>
  
              <input className="formfield"
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              id="" placeholder="Enter your email adderss"/>
  
              <input className="formfield"
              type="text"
              name="form_subject"
              value={formData.form_subject}
              onChange={handleChange}
              required
              id="" placeholder="Enter your subject"/>
  
              <textarea className="formfield formfield-textarea"
               name="message"
               id="" cols="30" rows="10" 
               value={formData.message}
               onChange={handleChange}
               required
               placeholder="Enter your message"></textarea>

            </div>

            <div>
              <button 
              type="submit" 
              className="button " 
              id="submit-button"
              value="Send">Send Message
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
