import React, { useEffect, useState } from 'react';
import './Notifications.css';

const Notifications = ({ inventoryData, salesData }) => {
  const [lowStockItems, setLowStockItems] = useState([]);
  const [salesAlerts, setSalesAlerts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const lowStock = inventoryData.filter(item => item.stock < 5);
    setLowStockItems(lowStock);

    const newSales = salesData.slice(-5); // Get last 5 sales
    setSalesAlerts(newSales);

    if (lowStock.length > 0 || newSales.length > 0) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 55000); // Auto-hide after 5 seconds
    }
  }, [inventoryData, salesData]);

  return (
    <>
      {showNotification && (
        <div className="notification-popup">
          <h3>Notifications</h3>
          {lowStockItems.length > 0 && (
            <div className="notification-section">
              <h4>Low Stock Items</h4>
              <ul>
                {lowStockItems.map((item, index) => (
                  <li key={index}>
                    {item.name}: Only {item.stock} left!
                  </li>
                ))}
              </ul>
            </div>
          )}
          {salesAlerts.length > 0 && (
            <div className="notification-section">
              <h4>Recent Sales</h4>
              <ul>
                {salesAlerts.map((sale, index) => (
                  <li key={index}>
                    {sale.name} sold for ${sale.amount.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Notifications;
