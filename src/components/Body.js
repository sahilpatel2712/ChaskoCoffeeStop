import React from 'react'

const Body = () => {
    return (
        <div className="parent-div">
            <div className="child-div">
                <div className="rest-text">
                    We've got your morning covered with,
                </div>
                <div className="coffee-text-div">
                    Coffee
                </div>
                <div className="rest-text">
                    It is best to start your day with a cup of coffee. Discover the
                    best flavours coffee you will ever have. We provide the best
                    for our customers.
                </div>
            </div>
            <div className="orderBox">
                <a className="orderLink" href="#order">Order Now</a>
            </div>
        </div>
    )
}
export default Body;