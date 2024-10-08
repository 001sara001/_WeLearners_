import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Enroll-Now-For-Bangla.css';  // Import the CSS file for Bangla page

const EnrollNowForBangla = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const handleSubmit = () => {
    if (selectedLevel) {
      // Perform your form submission logic here if needed
      // alert(`Enrolled in ${selectedLevel} level for Bangla. Feedback: ${feedback}`);
      
      // Navigate to the Review page
      navigate("/reviews");
    } else {
      alert('Please select a level before submitting.');
    }
  };

  return (
    <div className="enroll-now-for-bangla-container">
      <h1 className="enroll-now-for-bangla-heading">Enroll in Bangla Course</h1>
      <p className="enroll-now-for-bangla-description">
        Choose the level that best suits your needs and let us know how we can improve.
      </p>

      <div className="enroll-now-for-bangla-options">
        <button
          className={`enroll-now-for-bangla-button ${selectedLevel === 'Easy' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Easy')}
        >
          Easy
        </button>
        <button
          className={`enroll-now-for-bangla-button ${selectedLevel === 'Medium' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Medium')}
        >
          Medium
        </button>
        <button
          className={`enroll-now-for-bangla-button ${selectedLevel === 'Advanced' ? 'selected' : ''}`}
          onClick={() => handleLevelChange('Advanced')}
        >
          Advanced
        </button>
      </div>

      <div className="feedback-section">
        <textarea
          className="feedback-textarea"
          placeholder="Share your feedback or questions here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!selectedLevel}
      >
        Submit
      </button>
    </div>
  );
};

export default EnrollNowForBangla;
