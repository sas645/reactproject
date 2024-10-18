// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Implement authentication logic here
//     alert('Logged in successfully!');
//   };

//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//         <button type="submit">Login</button>
//       </form>
//     </motion.div>
//   );
// }

// export default LoginPage;

// import React, { useState } from 'react';


// function LoginPage({ handleLogin, goToSignup }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email: </label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <br />
//         <label>Password: </label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//       <p>New user? <a href="#" onClick={goToSignup}>Sign up here</a></p>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from 'react';
import './LoginPage.css';  // Add this if you created a separate CSS file

function LoginPage({ handleLogin, goToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>New user? <a href="#" onClick={goToSignup}>Sign up here</a></p>
    </div>
  );
}

export default LoginPage;
