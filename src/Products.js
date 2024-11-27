import React from 'react';
import ProductList from './ProductList';
import SearchFilter from './SearchFilter';
import { motion } from 'framer-motion';

function Products() {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Apple', category: 'Fruits', price: 1.2, quantity: 100 },
    { id: 2, name: 'Bread', category: 'Bakery', price: 2.5, quantity: 50 },
    { id: 3, name: 'Milk', category: 'Dairy', price: 1.0, quantity: 200 },
    // Add more products as needed
  ]);

  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const handleFilter = (searchTerm) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Products</h2>
      <SearchFilter products={products} onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
    </motion.div>
  );
}

export default Products;
