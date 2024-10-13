import React, { useState, useEffect } from 'react';
import '../App.css';
import quoteIcon from '../resource/quote.png';

const FeedbackPage = () => {
  const feedbacks = [
    { feedback: 'The cappuccino was divine! Definitely my new favorite spot.', person: 'Ayush Dadhaniya' },
    { feedback: 'Chasko’s ambiance is perfect for work or leisure. Loved the cold brew.', person: 'Vraj Bhanderi' },
    { feedback: 'The barista recommended the caramel latte, and it was perfection.', person: 'Sahil Patel' },
    { feedback: 'Exceptional service and delicious pastries! Will come back soon.', person: 'Deep Gajera' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks.length]);

  return (
    <div className="feedback-div">
      <div className="feedback-header">
        <h2 className="feedback-heading">Our coffee perfection feedback</h2>
        <p className="feedback-para">
          Our customers have amazing things to say about us
        </p>
      </div>

      <div className="feedback-data-content">
        <img src={quoteIcon} alt="Quote Icon" className="quote-icon" />

        <div className="feedback-slide">
          <p className="feedback">{feedbacks[currentIndex].feedback}</p>
          <p className="person">- <b><i>{feedbacks[currentIndex].person}</i></b></p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;