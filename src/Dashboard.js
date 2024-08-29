import React from 'react';

const Dashboard = ({ salesData, inventoryData }) => {
  const totalSales = salesData.reduce((sum, sale) => sum + sale.amount, 0);
  const totalItemsSold = salesData.length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Sales: ${totalSales.toFixed(2)}</p>
      <p>Total Items Sold: {totalItemsSold}</p>
      <h3>Inventory Levels</h3>
      <ul>
        {inventoryData.map((item, index) => (
          <li key={index}>{item.name}: {item.stock} in stock</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;