import  './Contacts.css'
import { FaTelegramPlane } from "react-icons/fa";

const Contacts = () => {
  return (
    <div id="contacts">
       <div  className="contact-section">
      <div className=" main-container ">
        <h1 className="contact-heading">Contact Me</h1>
        <h2 className="contact-sub-heading">Questions, thoughts, or just want to say hello?</h2>
        <div className="contact-container">
          <form className="form" action=" ">
            <div className="formfield-container" >
              <input className="formfield"
              type="text"
              name="name"
              id="" placeholder="Enter your name"/>
  
              <input className="formfield"
              type="email"
              name="email"
              id="" placeholder="Enter your email adderss"/>
  
              <input className="formfield"
              type="text"
              name="subject"
              id="" placeholder="Enter your subject"/>
  
              <textarea name="Message"
               id="" cols="30" rows="10" 
               className="formfield formfield-textarea"
               placeholder="Enter your message"></textarea>
            </div>
            <div>
              <button type="submit" className="button " id="submit-button">Send Message
              <a className='submit-icon' href=""> <FaTelegramPlane/></a>
              {/* <i className="submit-icon fa-solid fa-paper-plane"></i> */}
              </button>
            </div>
  
          </form>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default Contacts
