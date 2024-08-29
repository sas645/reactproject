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
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ProductList from './ProductList';
import InventoryForm from './InventoryForm';
import ShoppingCart from './ShoppingCart';
import Notifications from './Notifications';
import SearchBar from './SearchBar';
import LoginPage from './LoginPage';
import './App.css';

const App = () => {
  const [page, setPage] = useState('Dashboard');
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    { name: 'Apple', price: 1.0, stock: 10, category: 'Fruits' },
    { name: 'Milk', price: 2.5, stock: 20, category: 'Dairy' },
    { name: 'Bread', price: 2.0, stock: 15, category: 'Bakery' },
    // Add more example products here
  ]);
  const [salesData, setSalesData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    if (product.stock > 0) {
      setCart([...cart, product]);
      setSalesData([...salesData, { name: product.name, amount: product.price }]);
      setProducts(products.map(p => p.name === product.name ? { ...p, stock: p.stock - 1 } : p));
    }
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleLogin = (username, password) => {
    // For simplicity, we'll use a hardcoded username and password
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header>
        <nav>
          <button onClick={() => handlePageChange('Dashboard')}>Dashboard</button>
          <button onClick={() => handlePageChange('ProductList')}>Product List</button>
          <button onClick={() => handlePageChange('AddProduct')}>Add Products</button>
          <button onClick={() => handlePageChange('ShoppingCart')}>View Cart</button>
        </nav>
      </header>

      {page === 'Dashboard' && (
        <>
          <Dashboard salesData={salesData} inventoryData={products} />
          <Notifications inventoryData={products} salesData={salesData} />
        </>
      )}

      {page === 'ProductList' && (
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProductList products={products} onAddToCart={addToCart} searchTerm={searchTerm} />
        </>
      )}

      {page === 'AddProduct' && <InventoryForm onAddProduct={addProduct} />}

      {page === 'ShoppingCart' && <ShoppingCart cart={cart} />}
    </div>
  );
};

export default App;