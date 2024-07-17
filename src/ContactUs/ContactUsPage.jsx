import React from 'react';
import '../styles/ContactUsPage.css'; // Import CSS file for styling

const ContactUsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mt-20 mb-4">Contact Us</h1>
      
      <div className="flex justify-center">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" className="input-field" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" className="input-field" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" className="input-field"></textarea>
            </div>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
      
     </div>
  );
};

export default ContactUsPage;
