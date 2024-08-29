// src/components/Sales.js
import React, { useState } from 'react';

const Sales = ({ products, addSale }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSale = (e) => {
    e.preventDefault();
    addSale({ product: selectedProduct, quantity });
    setSelectedProduct('');
    setQuantity(0);
  };

  return (
    <div>
      <h2>Record a Sale</h2>
      <form onSubmit={handleSale}>
        <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
          <option value="">Select Product</option>
          {products.map(product => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <button type="submit">Add Sale</button>
      </form>
    </div>
  );
};

export default Sales;