// src/components/Inventory.js
import React from 'react';

const Inventory = ({ products }) => {
  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}: {product.stock} units in stock
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;