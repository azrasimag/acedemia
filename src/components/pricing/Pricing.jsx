import React, { useState } from 'react';
import PriceCard from './PriceCard';
import './Price.css';

const plans = [
  { name: 'Basit', price: '39.99₺/ay', features: ['istenen 4 alandan kurs desteği', 'bireysel eğitim koçu desteği', 'eğitim sertifikası'] },
  { name: 'Standart', price: '69.99₺/ay', features: ['istenen 8 alandan kurs desteği', 'bireysel eğitim koçu desteği', 'eğitim sertifikası'] },
  { name: 'Premium', price: '99.99₺/ay', features: ['tüm alanlardan kurs desteği', 'bireysel eğitim koçu desteği', 'eğitim sertifikası'] }
];

const Pricing = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (plan) => {
    setCart([...cart, plan]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="price">
      <h1>Planınızı Seçin</h1>
      <div className="price-items">
        {plans.map((plan, index) => (
          <PriceCard key={index} plan={plan} addToCart={addToCart} />
        ))}
      </div>
      <button onClick={toggleCart} className="add-to-cart">Sepeti Görüntüle</button>
      <div className={`shopping-cart-container ${isCartOpen ? 'open' : ''}`}>
        <div className="shopping-cart-header">
          <h2>Alışveriş Sepeti</h2>
          <button className="close-cart" onClick={toggleCart}>×</button>
        </div>
        <div className="shopping-cart-body">
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
                <button className="remove-from-cart" onClick={() => removeFromCart(index)}>×</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
