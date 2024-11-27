import React, { useState } from 'react';
import axios from 'axios';

function InventoryForm() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { productName, quantity, price };
    
    axios.post('http://localhost:5000/products', newProduct)
      .then(() => alert('Product added successfully!'))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Inventory Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default InventoryForm;
