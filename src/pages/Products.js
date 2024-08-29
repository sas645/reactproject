// src/pages/Products.js
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default Products;