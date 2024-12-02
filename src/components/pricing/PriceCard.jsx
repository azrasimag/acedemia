import React, { useState } from 'react';

const PriceCard = ({ plan, addToCart }) => {
  return (
    <div className="price-card">
      <h2>{plan.name}</h2>
      <p>{plan.price}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="add-to-cart" onClick={() => addToCart(plan)}>Sepete Ekle</button>
    </div>
  );
};

export default PriceCard;
