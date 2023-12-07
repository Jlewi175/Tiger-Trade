import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Landing from './pages/Landing';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Seller from './pages/Seller';
import Marketplace from './pages/Marketplace';
import Account from './pages/Account';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import Signup from './pages/Signup';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/market" element={<Marketplace cart={cartItems} setItems={setCartItems} />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart items={cartItems} setItems={setCartItems} />} />
          <Route path="/checkout" element={<Checkout cart={cartItems} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
