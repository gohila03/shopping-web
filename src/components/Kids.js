import React, { useContext } from 'react';
import '../style/Kids.css';
import { CartContext } from '../context/CartContext'; // Import CartContext

const KidsProducts = [
  {
    id: 1,
    name: 'Twinning',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
    price: 1200,
    originalPrice: 2000,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Frocks',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGXPbD5L_a0SGUh1BfEDa46liVAvyLyJbnQ',
    price: 1500,
    originalPrice: 1000,
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Western',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmgPh4Itg_JADd8H6oitzF-pqRUu5F3uOjO2EwYiiZAnIfvkvmChAK7Kt4fOUgC2L04ZiI6y32u452ETo06e_piJ89Zn8LoxCoXJLIxTYOG0_q2f5YZBYo',
    price: 1600,
    originalPrice: 1200,
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Sleep wear',
    image: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/18116986a.webp',
    price: 1600,
    originalPrice: 1200,
    rating: 4.5,
  }
];

const KidsSection = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart function

  return (
    <section className="pro">
      <h1>Kid's <span>store</span></h1>
      <div className="products">
        {KidsProducts.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="desc">
              <h4>{product.name}</h4>
              <div className="desc-1">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <i key={`star-${i}`} className="fa-solid fa-star"></i>
                ))}
                {product.rating % 1 !== 0 && (
                  <i className="fa-regular fa-star-half-stroke"></i>
                )}
              </div>
              <div className="desc-2">
                <span>&#8377; {product.price}</span>
                <del>&#8377; {product.originalPrice}</del>
              </div>
              {/* Add cart icon and handle add to cart */}
              <div className="cart-icon" onClick={() => addToCart(product)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsSection;
