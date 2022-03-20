import React from "react";
// import data from "../../helper/data";
import "./Card.css";


function Card({title, desc, image}) {
  return (
    
    // <div className="card-container">
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <div className="card_hover">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-description">
          <p>{desc}</p>
        </div>
      </div>
    // </div>
  
  );
}

export default Card;
