import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart, searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductItem 
            key={product.name}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
