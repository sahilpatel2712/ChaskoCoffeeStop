import React from 'react'
import cup from '../resource/Subscribecup.png'
function Subscribe() {
    return (
        <div className="SubscribeBack">
            <div className="sub-brown-rectangle">
                <div className="sub-center-div">
                    <div className="subHead">
                        <h2>Subscribe to get the Latest News</h2>
                    </div>
                    <div className="subText">
                        Don’t miss out on our latest news, updates, tips and special offers
                    </div>
                    <div className="subscribe-input-container">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="email-input"
                            required
                        />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </div>
                <img className="subCup" src={cup} alt="cup"></img>
        </div>
    )
}

export default Subscribe