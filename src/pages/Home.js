// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Welcome to Supermarket Management System</h1>
      <p>Manage your supermarket efficiently with our tool.</p>
    </motion.div>
  );
}

export default Home;
