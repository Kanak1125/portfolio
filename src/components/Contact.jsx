import {useState, useEffect, useRef} from 'react'
import './css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'

const Contact = () => {
  const [msg, setMsg] = useState({
    fname: '',
    email: '',
    message: ''
  });

  function handleInput(e) {
    const {name, value} = e.target;

    setMsg(prevMsg => {
      return {
        ...prevMsg,
        [name]: value 
      }
    })
  }

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showPopup]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_azn6tvx', 'template_jv45jbj', form.current, 'C_JhbPrDax8gL4d-4')
      .then((result) => {
          setShowPopup(true);
      }, (error) => {
          console.log(error);
      });
  };

  return (
    <section id="contact">
      {showPopup && <div className={`message`}>Message sent successfully...</div>}
      <p className="super-title">Get in touch</p>
      <p className="section-title">Contact</p>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-details">
            <FontAwesomeIcon icon={faPhone} className='contact-icon'/>
            <div className="contact-info">
              <h5>Call me</h5>
              <small>+977 9818935876</small>
            </div>
          </div>
          <div className="contact-details">
            <FontAwesomeIcon icon={faEnvelope} className='contact-icon'/>
            <div className="contact-info">
              <h5>Mail me</h5>
              <small>kanacsaqya0@gmail.com</small>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="fname" 
              value={msg.fname} 
              placeholder='Your Full name...' className='modified-input'
              onChange={handleInput}
              required
            />
            <input 
              type="email" 
              name="email" 
              value={msg.email} 
              placeholder='Your email...' className='modified-input'
              onChange={handleInput}
              required
              />
            <textarea 
              name="message" 
              value={msg.message} 
              cols="30" 
              rows="10" 
              placeholder='Message...' className='modified-input'
              onChange={handleInput}
              required
            ></textarea>
            <input 
              type="submit" 
              value="Submit" 
              className='btn talk-btn'
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact