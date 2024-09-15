import React from 'react'
import '../App.css'
const WeBest = ({ image, name, content}) => {
  return (
    <div className="WeBest-card">
        <img src={image} alt={name} className="WeBest-card-image" />
        <div className="menu-card-content">
          <h3 className="menu-card-name">{name}</h3>
          <p className="menu-card-description">{content}</p>
        </div>
      </div>
  )
}

export default WeBest;