// src/pages/ThankYou.jsx
import React from 'react';
import '../styles/ThankYou.css'; // Import CSS file for styling

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1 className="thank-you-heading">Thank You!</h1>
      <p className="thank-you-message">
        We have received your message and will get back to you shortly.
        If you have any more questions, feel free to reach out again.
      </p>
    </div>
  );
};

export default ThankYou;
