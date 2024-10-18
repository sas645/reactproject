import React, { useState } from 'react';
import './AddProductStyles.css'; // Add custom styles

const AddProduct = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price), stock: parseInt(stock, 10) };
    onAddProduct((prevProducts) => [...prevProducts, newProduct]);
    setName('');
    setPrice('');
    setStock('');
  };

  return (
    <div className="add-product-container">
      <h2 className="add-product-title">Add Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          className="add-product-input"
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="add-product-input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="add-product-input"
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <button className="add-product-button" type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;