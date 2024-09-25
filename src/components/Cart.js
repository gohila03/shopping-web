import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import '../style/Cart.css'; // Add your own styling
import RazorpayPayment from '../components/RazorPayment'; // Import RazorpayPayment

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Get cart items and removeFromCart function

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0) * 100; // Amount in paise

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: &#8377; {item.price}</p>
                <div className="cart-item-rating">
                  {[...Array(Math.floor(item.rating))].map((_, i) => (
                    <i key={`star-${i}`} className="fa-solid fa-star"></i>
                  ))}
                  {item.rating % 1 !== 0 && (
                    <i className="fa-regular fa-star-half-stroke"></i>
                  )}
                </div>
                {/* Delete button */}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          {/* Proceed to Pay button */}
          <RazorpayPayment totalAmount={totalAmount} />
        </div>
      )}
    </div>
  );
};

export default Cart;
