import React from 'react';
import Slider from 'react-slick';
import '../App.css'; // Ensure your CSS file is imported

const FeedbackPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="feedbackPageDiv">
      <h2 className="feedbackHeading">Customer Feedback</h2>
      <Slider {...settings}>
        <div className="feedBackDiv">
          <div className="feedBackTextDiv">
            "This is the best coffee shop! The ambiance is perfect and the coffee is fantastic!"
          </div>
        </div>
        <div className="feedBackDiv">
          <div className="feedBackTextDiv">
            "I love the variety of blends available! Each visit is a new experience."
          </div>
        </div>
        <div className="feedBackDiv">
          <div className="feedBackTextDiv">
            "The staff is friendly and the service is quick. Highly recommended!"
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FeedbackPage;