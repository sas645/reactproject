/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO WORLD</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/



/*import React from "react";
import Csed from "./csed";
import './App.css';

function App()
{
  return(
    <div className="App">
      <Csed name="harini"/>
      </div>
);
}
export default App;*/
/*import React from "react";
import './App.css';
import ParentComponent from "./csed";
function App()
{
return
{
  <div className="App">
    <ParentComponent/>
  </div>
};
}
export default App;*/
//import Sasmita from "./ClassComponent";
//import Welcome from "./Statecomponent";

/*import Sasmita from "./ClassComponent";

function App()
{
return(
  <div className="App">
   <Sasmita/>
  </div>
);
}
export default App;*/

/*import ABC from "./ABC";
import Counter from "./Saturday";
function App()
{
return(
  <div className="App">
   <ABC/>
   <Counter/>
  </div>
);
}
export default App;*/
/*import React from "react";
import './App.css';
import Statement from "./statemanipulation";
 function App()
{
return(
 <div className="App">
  <Statement/>
  </div>
  );
}
export default App;*/

/*import React from "react";
import './App.css';
import CSEDMousehover from "./Mousehover";
import ScopedStyles from "./ScopingStyle";
import UserInput from "./UserInput";
 function App()
{
return(
 <div className="App">
 <CSEDMousehover/>
 <ScopedStyles/>
<UserInput/>

    </div>

    
  );
}
export default App;*/
// src/App.js
// src/App.js
// src/App.js*/
/*import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    // Fruits
    { name: 'Apple', price: 1.00, category: 'Fruits' },
    { name: 'Banana', price: 0.50, category: 'Fruits' },
    { name: 'Orange', price: 0.80, category: 'Fruits' },
    // Vegetables
    { name: 'Carrot', price: 0.75, category: 'Vegetables' },
    { name: 'Broccoli', price: 1.20, category: 'Vegetables' },
    { name: 'Spinach', price: 1.50, category: 'Vegetables' },
    // Biscuits
    { name: 'Oreo', price: 2.50, category: 'Biscuits' },
    { name: 'Digestive', price: 1.80, category: 'Biscuits' },
    // Snacks
    { name: 'Potato Chips', price: 2.00, category: 'Snacks' },
    { name: 'Pretzels', price: 1.50, category: 'Snacks' },
    // Packed Items
    { name: 'Packaged Rice', price: 5.00, category: 'Packed Items' },
    { name: 'Instant Noodles', price: 1.00, category: 'Packed Items' },
    // Bags
    { name: 'Shopping Bag', price: 0.99, category: 'Bags' },
    { name: 'Reusable Bag', price: 2.50, category: 'Bags' },
    // Dairy
    { name: 'Milk', price: 1.20, category: 'Dairy' },
    { name: 'Cheese', price: 3.00, category: 'Dairy' },
    { name: 'Yogurt', price: 0.99, category: 'Dairy' },
    // Beverages
    { name: 'Orange Juice', price: 2.50, category: 'Beverages' },
    { name: 'Soda', price: 1.50, category: 'Beverages' },
    { name: 'Coffee', price: 4.00, category: 'Beverages' },
    // Frozen Foods
    { name: 'Frozen Pizza', price: 5.00, category: 'Frozen Foods' },
    { name: 'Ice Cream', price: 3.50, category: 'Frozen Foods' },
    // Bakery
    { name: 'Bread', price: 2.00, category: 'Bakery' },
    { name: 'Croissant', price: 1.50, category: 'Bakery' },
    // Personal Care
    { name: 'Shampoo', price: 4.00, category: 'Personal Care' },
    { name: 'Toothpaste', price: 2.00, category: 'Personal Care' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList products={products} onAddToCart={addToCart} searchTerm={searchTerm} />
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default App;*/
// App.js
/*import React, { useState } from 'react';
import Dashboard from './Dashboard';
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';
import Login from './Login';
import Notifications from './Noti';

function App() {
  const [inventory, setInventory] = useState([]);
  const lowStockItems = inventory.filter(item => item.quantity < 5).map(item => item.productName);

  const addOrUpdateProduct = (product) => {
    setInventory(prevInventory => {
      const existingProductIndex = prevInventory.findIndex(item => item.productName === product.productName);
      if (existingProductIndex >= 0) {
        const updatedInventory = [...prevInventory];
        updatedInventory[existingProductIndex].quantity = product.quantity;
        return updatedInventory;
      }
      return [...prevInventory, product];
    });
  };

  return (
    <div>
      <Login />
      <Dashboard />
      <InventoryForm onSubmit={addOrUpdateProduct} />
      <InventoryList items={inventory} />
      <Notifications lowStockItems={lowStockItems} />
    </div>
  );
}

export default App;*/
// App.js
/*import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import SearchBar from './SearchBar';
import InventoryForm from './InventoryForm';
import Dashboard from './Dashboard';
import UserAuthentication from './UserAuthentication';
import Notifications from './Notifications';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    // Example products (same as previous, or you can add more categories and products)
  ]);
  const [salesData, setSalesData] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setSalesData([...salesData, { name: product.name, amount: product.price }]);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div className="app">
      {!user ? (
        <UserAuthentication onLogin={handleLogin} />
      ) : (
        <>
          <Dashboard salesData={salesData} inventoryData={products} />
          <Notifications inventoryData={products} salesData={salesData} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProductList products={products} onAddToCart={addToCart} searchTerm={searchTerm} />
          <ShoppingCart cart={cart} />
          <InventoryForm onAddProduct={addProduct} />
        </>
      )}
    </div>
  );
};

export default App;*/
// import React, { useState } from 'react';
// import './App.css';
// import Dashboard from './Dashboard';
// import InventoryForm from './InventoryForm';
// import SearchFilter from './SearchFilter';
// import LoginPage from './LoginPage';
// import Notifications from './Notifications';

// function App() {
//   const [view, setView] = useState('dashboard');

//   const renderView = () => {
//     switch(view) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'inventoryForm':
//         return <InventoryForm />;
//       case 'searchFilter':
//         return <SearchFilter />;
//       case 'loginPage':
//         return <LoginPage />;
//       case 'notifications':
//         return <Notifications />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Supermarket Management System</h1>
//         <nav>
//           <button onClick={() => setView('dashboard')}>Dashboard</button>
//           <button onClick={() => setView('inventoryForm')}>Inventory Form</button>
//           <button onClick={() => setView('searchFilter')}>Search & Filter</button>
//           <button onClick={() => setView('login')}>Login</button>
//           <button onClick={() => setView('notifications')}>Notifications</button>
//         </nav>
//       </header>
//       <main>
//         {renderView()}
//       </main>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import InventoryForm from './InventoryForm';
import SearchFilter from './SearchFilter';
import LoginPage from './LoginPage';
import Notifications from './Notifications';
import SignupPage from './SignupPage'; // Import the SignupPage component
import axios from 'axios'; // Import axios

function App() {
  const [view, setView] = useState('login'); // Default to login
  const [isAuthenticated, setIsAuthenticated] = useState(false); // To track user authentication

  // Render different views based on state
  const renderView = () => {
    if (!isAuthenticated) {
      switch(view) {
        case 'login':
          return <LoginPage handleLogin={handleLogin} goToSignup={() => setView('signup')} />;
        case 'signup':
          return <SignupPage goToLogin={() => setView('login')} />;
        default:
          return <LoginPage handleLogin={handleLogin} goToSignup={() => setView('signup')} />;
      }
    }

    // If authenticated, show the app views
    switch(view) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventoryForm':
        return <InventoryForm />;
      case 'searchFilter':
        return <SearchFilter />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Dashboard />;
    }
  };

  // Handle login logic
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        setIsAuthenticated(true);
        setView('dashboard');
      } else {
        alert('Invalid credentials. Please try again or sign up.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Supermarket Management System</h1>
        {isAuthenticated && (
          <nav>
            <button onClick={() => setView('dashboard')}>Dashboard</button>
            <button onClick={() => setView('inventoryForm')}>Inventory Form</button>
            <button onClick={() => setView('searchFilter')}>Search & Filter</button>
            <button onClick={() => setView('notifications')}>Notifications</button>
          </nav>
        )}
      </header>
      <main>
        {renderView()}
      </main>
    </div>
  );
}

export default App;
