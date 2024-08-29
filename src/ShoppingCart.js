import React from 'react';

const ShoppingCart = ({ cart }) => {
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}: ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
