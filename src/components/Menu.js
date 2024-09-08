import React from 'react'
import MenuCard from './MenuCard';
import menu1 from '../resource/menu1.png';
import menu2 from '../resource/menu2.png'
const Menu = () => {
    const menuItems = [
        {
            image: {menu1},
            name: 'Cappucciuno',
            content: 'Coffee 50%|Milk 50%',
            price: '200'
        },
        {
            image: {menu2},
            name: 'Latte',
            content: 'Smooth latte with steamed milk and a touch of foam.',
            price: '5.49'
        }
        // Add more items as needed
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
