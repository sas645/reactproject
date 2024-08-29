// InventoryList.js
import React, { useState } from 'react';

function InventoryList({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(item =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Inventory List</h3>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item.productName} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;
