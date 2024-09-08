import React from 'react'
import '../App.css'
const MenuCard = ({ image, name, content, price }) => {
    return (
      <div className="menu-card">
        <img src={image} alt={name} className="menu-card-image" />
        <div className="menu-card-content">
          <h3 className="menu-card-name">{name}</h3>
          <p className="menu-card-description">{content}</p>
          <p className="menu-card-price">${price}</p>
          <button className="menu-card-button">Order Now</button>
        </div>
      </div>
    );
  };

export default MenuCard;
