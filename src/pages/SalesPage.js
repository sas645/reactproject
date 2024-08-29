// src/pages/SalesPage.js
import React, { useState } from 'react';
import Sales from '../components/Sales';
import Inventory from '../components/Inventory';

const SalesPage = () => {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple', stock: 100 },
    { id: 2, name: 'Banana', stock: 150 },
  ]);

  const addSale = (sale) => {
    setSales([...sales, sale]);
    setProducts(
      products.map(product =>
        product.name === sale.product
          ? { ...product, stock: product.stock - sale.quantity }
          : product
      )
    );
  };

  return (
    <div>
      <Sales products={products} addSale={addSale} />
      <Inventory products={products} />
    </div>
  );
};

export default SalesPage;
