// Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Import CartContext
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext); // Access cart items

  return (
    <header>
      <nav className="nav">
        <div className="main">
          <h4>SHOP YOUR <span>FANTASY</span></h4>
        </div>

        <div className="navtool">
          <Link to="/">Home</Link>
          <a href="#top">New Arrival</a>
          <Link to="/about-us">About Us</Link>
          <Link to="/account">Account</Link>
        </div>

        <div className="icon">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {/* Show cart count */}
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
