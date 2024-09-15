import React from 'react';
import WeBest from './WeBest.js';
import '../App.css';
import badge from '../resource/badge.png';
import bean from '../resource/bean.png';
import coffeecup from '../resource/coffee-cup.png'
import bestPrice from '../resource/best-price.png'
const Page3 = () => {
    const menuItems = [
        {
            image: bean,
            name: 'Supreme Beans',
            content: 'Beans that provides great taste',
        },
        {
            image: badge,
            name: 'High Quality',
            content: 'We provide the highest quality',
        },
        {
            image: coffeecup,
            name: 'Extraordinary ',
            content: 'Coffee like you have never tasted',
        },
        {
            image: bestPrice,
            name: 'Affordable Price',
            content: 'Our Coffee prices are easy to afford',
        }
    ];
    return (
        <div>
            <div className="page3-header-div">
                <div>
                    <h2 className="page3-heading">Why are we different?</h2>
                    <span className="page3-span">We don’t just make your coffee, we make your day!</span>
                </div>
            </div>
            <div className="cardsLocation">
                <div className="menu">
                    {menuItems.map((item, index) => (
                        <WeBest key={index} image={item.image} name={item.name} content={item.content} />
                    ))}
                </div>
            </div>
            <div className="page3-footer">
                <div className="footer-text">
                    <p className="page3Text">Great ideas start with great coffee, Lets help you achieve that Get started today.<h3 className="footer-h2">Get started today.</h3></p>
                    <div className="JoinUs">
                        <a className="JoinUsLink" href="#joinus">Join Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3;
