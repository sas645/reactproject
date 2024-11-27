import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchFilter() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search & Filter</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.productName} - {product.quantity} in stock, ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
