import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <button 
        onClick={() => onAddToCart(product)} 
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductItem;