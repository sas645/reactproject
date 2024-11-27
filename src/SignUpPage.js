// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// function SignupPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Implement signup logic here
//     alert('Account created successfully!');
//   };

//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//         <button type="submit">Sign Up</button>
//       </form>
//     </motion.div>
//   );
// }

// export default SignupPage;
import React, { useState } from 'react';
import axios from 'axios';

function SignupPage({ goToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', {
        email,
        password
      });
      if (response.status === 201) {
        alert('Signup successful! Please log in.');
        goToLogin();
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#" onClick={goToLogin}>Login here</a></p>
    </div>
  );
}

export default SignupPage;

/*import React, { useState } from 'react';
import axios from 'axios';

function SignUpPage({ handleSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    
    axios.post('http://localhost:5000/users', newUser)
      .then(() => handleSignup(newUser))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;*/
/*import React, { useState } from 'react';
function SignupPage({ handleSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(email, password); // Call the signup handler
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupPage;*/
