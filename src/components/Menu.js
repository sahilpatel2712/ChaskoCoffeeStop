import React from 'react'
import MenuCard from './MenuCard';
import menu1 from '../resource/menu1.png';
import menu2 from '../resource/menu2.png';
import menu3 from '../resource/menu3.png';
import menu4 from '../resource/menu4.png';
const Menu = () => {
    const menuItems = [
        {
            image: menu1,
            name: 'Cappucciuno',
            content: 'Coffee 50%|Milk 50%',
            price: '200'
        },
        {
            image: menu2,
            name: 'Latte',
            content: 'Coffee 40%|Foam 60%',
            price: '140'
        }
        ,
        {
            image: menu3,
            name: 'Expresso',
            content: 'Coffee 80%|Milk 20%',
            price: '110'
        }
        ,
        {
            image: menu4,
            name: 'Light Coffee',
            content: 'Coffee 40%|Milk 60%',
            price: '160'
        }
    ];

    return (
        <div className="menuPage">
            <div className="menuSlide">
                <div className="menuText1">
                    <h1 className="menuHeading">Enjoy a new blend of coffee style</h1>
                    <div className="menuContent">Explore all flavours of coffee with us. There is always a new cup worth experiencing</div>
                </div>
            </div>
            <div className="cardsLocation">
                <div className="menu">
                    {menuItems.map((item, index) => (
                        <MenuCard key={index} image={item.image} name={item.name} content={item.content} price={item.price}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu;
