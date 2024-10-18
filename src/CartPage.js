import React from 'react';
import { motion } from 'framer-motion';

function CartPage() {
  // Mock data for demo purposes
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: 'Apple', price: 1.2, quantity: 2 },
    { id: 2, name: 'Bread', price: 2.5, quantity: 1 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </motion.div>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </motion.div>
  );
}

export default CartPage;
