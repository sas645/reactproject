import React from 'react';
import { motion } from 'framer-motion';

function CheckoutPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" required />

        <label>Address:</label>
        <input type="text" required />

        <label>Payment Method:</label>
        <select required>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </motion.div>
  );
}

export default CheckoutPage;
