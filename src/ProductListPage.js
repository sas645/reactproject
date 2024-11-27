// src/components/ProductListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the JSON server
    axios.get('http://localhost:5000/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <strong>{product.productName}</strong> - {product.quantity} units, priced at ${product.price}
            </li>
          ))
        ) : (
          <p>No products added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default ProductListPage;
