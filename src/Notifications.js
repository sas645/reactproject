import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
    setTimeout(() => setNotifications(notifications.filter((_, i) => i !== 0)), 3000);
  };

  return (
    <div>
      {notifications.map((note, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 10 * index,
            right: 10,
            backgroundColor: '#fffae5',
            border: '1px solid #f5d300',
            borderRadius: 5,
            padding: 10,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000
          }}
        >
          {note}
        </motion.div>
      ))}
    </div>
  );
}

export default Notifications;