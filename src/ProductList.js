import React from 'react';
import { motion } from 'framer-motion';

function ProductList({ products }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ProductList;
