import React from 'react'
import quote from '../resource/quote.png'
const FeedbackPage = () => {
    return (
        <div className="feedbackPageDiv">
            <div className="headingDiv">
                <h1 className="feedbackHeading">Our coffee perfection feedback</h1>
                <p className="feedContent">Our customers has amazing things to say about us</p>
            </div>
            <div className="feedBackDiv">
                <img className="quote-image" src={quote} alt=""></img>
            </div>
        </div>
    )
}

export default FeedbackPage;