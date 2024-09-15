import React from 'react';
import beans from '../resource/page4coffee_bean.png'; // Correct import of image
import cup from '../resource/page4cup.png'
const Page4 = () => {
    return (
        <div className="page4-div">
            <div className="brown-rectangle">
                <div className="page4text">
                    <h1 className="page4-text-head">Get a chance to have an Amazing morning</h1>
                    <div className="paraText">
                        <p>We are giving you are one time opportunity to experience a better life with coffee.</p>
                    </div>
                    <div className="OrderNow">
                    <a className="JoinUsLink" href="#OrderNow">Order Now</a>
                </div>
                </div>
            </div>
            <img className="cup-left-image" src={cup} alt=""></img>
            <img className="bottom-left-image" src={beans} alt="Coffee Beans" />
        </div>
    );
}

export default Page4;