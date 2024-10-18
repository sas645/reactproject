import React, { useState } from 'react';

function SearchFilter({ products, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <label>Search:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </div>
  );
}

export default SearchFilter;
