import React, { useState, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState(""); 


  useEffect(() => {
   
    const showConsoleShield = () => {
      console.clear(); 
      
   
      const shieldStyle = `
        background-color: #000000; 
        color: #3700ff; 
        font-size: 10px; 
        font-weight: bold; 
        padding: 8px 15px; 
        border-radius: 4px; 
        border: 1px solid #721c24;
        font-family: sans-serif;
      `;
      
 
      console.log("%c🛡️ SHIVA MISHRA PORTFOLIO - SECURE SHIELD ACTIVE", shieldStyle);
    };

    showConsoleShield();

  
    const consoleInterval = setInterval(showConsoleShield, 2000);

    let timer;
    const triggerWarning = (msg) => {
      setWarningMessage(msg);
      setShowWarning(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowWarning(false);
      }, 3000); 
    };

   
    const handleContextMenu = (e) => {
      e.preventDefault();
      triggerWarning("Security Notice: Right-click & source inspection are protected.");
    };

  
    const handleKeyDown = (e) => {
      
      if (e.keyCode === 123) {
        e.preventDefault();
        triggerWarning("Security Alert: DevTools shortcut is disabled.");
        return false;
      }
    
      if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        triggerWarning("Security Alert: DevTools shortcut is disabled.");
        return false;
      }
     
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        triggerWarning("Security Alert: DevTools shortcut is disabled.");
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

   
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      clearInterval(consoleInterval); 
    };
  }, []);
 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState("Send Message");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    const submitData = {
      ...formData,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submitData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message Sent!");
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus("Send Message"), 3000);
      } else {
        setStatus("❌ Failed, Try Again");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Error Occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contactSection">
   
      {showWarning && (
        <div className="securityToast">
          <svg className="toastIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span>{warningMessage}</span>
        </div>
      )}

      <div className="container">
        <h2 className="heading">Contact Me</h2>
        <div className="contentGrid">
          <div className="infoColumn">
            {/* Email Card */}
            <div className="infoCard">
              <div className="icon">
                <svg className="svgIcon" xmlns="http://w3.org" viewBox="0 0 512 512">
                  <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
                </svg>
              </div>
              <div className="infoText">
                <h3>Email</h3>
                <p><a href="mailto:panditshiva9942@gmail.com">panditshiva9942@gmail.com</a></p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="infoCard">
              <div className="icon">
                <svg className="svgIcon" xmlns="http://w3.org" viewBox="0 0 512 512">
                  <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                </svg>
              </div>
              <div className="infoText">
                <h3>Phone</h3>
                <p><a href="tel:+918318601244">+91 8318601244</a></p>
              </div>
            </div>

            {/* Location Card */}
            <div className="infoCard">
              <div className="icon">
                <svg className="svgIcon" xmlns="http://w3.org" viewBox="0 0 384 512">
                  <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
                </svg>
              </div>
              <div className="infoText">
                <h3>Locations</h3>
                <p>Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

            {/* Availability Card */}
            <div className="infoCard">
              <div className="icon">
                <svg className="svgIcon" xmlns="http://w3.org" viewBox="0 0 512 512">
                  <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              </div>
              <div className="infoText">
                <h3>Availability</h3>
                <p>Available Anytime – 24×7</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="formColumn">
            <form onSubmit={handleSubmit} className="contactForm">
              <div className="formGroup">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="formGroup">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submitBtn" disabled={loading}>
                <svg className="btnIcon" xmlns="http://w3.org" viewBox="0 0 512 512">
                  <path d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z" />
                </svg>
                {status}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
