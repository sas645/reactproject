import React, { useState } from 'react';
import { motion } from 'framer-motion';

function InventoryForm({ product = {}, onSave }) {
  const [name, setName] = useState(product.name || '');
  const [category, setCategory] = useState(product.category || '');
  const [price, setPrice] = useState(product.price || '');
  const [quantity, setQuantity] = useState(product.quantity || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, category, price, quantity });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>{product.id ? 'Update Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <button type="submit">{product.id ? 'Update' : 'Add'}</button>
      </form>
    </motion.div>
  );
}

export default InventoryForm;
