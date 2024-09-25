import React, { useContext } from 'react';
import '../style/Womens.css';
import { CartContext } from '../context/CartContext'; // Import CartContext

const Womens = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart function

  const products = [
    {
      img: 'https://www.atun.in/wp-content/uploads/2023/11/023A8724-570x760.jpg',
      name: 'Kurti',
      price: 1200,
      originalPrice: 2000,
      rating: 4.5,
    },
    {
      img: 'https://www.atun.in/wp-content/uploads/2023/02/Lime-Green-4.jpg',
      name: 'Shirts',
      price: 1500,
      originalPrice: 1000,
      rating: 4.5,
    },
    {
      img: 'https://www.atun.in/wp-content/uploads/2023/04/IMG_1761.jpg',
      name: 'Western',
      price: 1600,
      originalPrice: 1200,
      rating: 4.5,
    },
    {
      img: 'https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-tie-dye-print-top-in-sky-blue-solid-joggers-in-pink-100-cotton-894374.jpg',
      name: 'Sleep wear',
      price: 1600,
      originalPrice: 1200,
      rating: 4.5,
    },
  ];

  return (
    <section className="pro">
      <h1>Women's <span>store</span></h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.img} alt={product.name} />
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
              {/* Add cart icon here */}
              <div className="cart-icon" onClick={() => addToCart(product)}>
                <i className="fa-solid fa-cart-shopping"></i> {/* Font Awesome cart icon */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Womens;
