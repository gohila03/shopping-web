import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Wallpaper from './components/Wallpaper';
import Menu from './components/Menu';
import Mens from './components/Mens';
import Womens from './components/Womens';
import KidsProducts from './components/Kids';
import ContactSection from './components/Contact';
import FooterSection from './components/About';
import ProductSection from './components/Mens'
; // Optional: ProductSection for Mens
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import RazorpayPayment from './components/RazorPayment'; // Razorpay Component

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Wallpaper />
                <Menu />
                <Mens />
                <Womens />
                <KidsProducts />
                <ContactSection />
                <FooterSection />
              </>
            } 
          />
          <Route path="/about-us" element={<FooterSection />} />
          <Route path="/account" element={<ContactSection />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart route */}
          <Route path="/mens" element={<ProductSection />} /> {/* Optional */}
          <Route path="/Womens" element={<ProductSection />} /> {/* Optional */}
          <Route path="/payment" element={<RazorpayPayment />} /> {/* Razorpay Payment route */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
