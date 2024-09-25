import React, { useContext } from 'react';
import '../style/Mens.css';
import { CartContext } from '../context/CartContext'; // Import CartContext

const Mens = [
{
   id: 1,
   name: 'Shalwar',
   image: 'https://www.lashkaraa.com/cdn/shop/products/laksharaa20-090228059.jpg?v=1665801788&width=533',
   price: 1200,
   originalPrice: 2000,
   rating: 4.5,
 },
 {
   id: 2,
   name: 'T-Shirts',
   image: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2180-03-M27.jpg?v=1696915797&width=600',
   price: 1500,
   originalPrice: 1000,
   rating: 4.5

 },
 {
   id: 3,
   name: 'Shirts',
   image: 'https://sslimages.shoppersstop.com/sys-master/images/hf3/he0/31984170926110/S24SFQSPBO60480_NAVY.jpg_230Wx334H',
   price: 1600,
   originalPrice: 1200,
   rating: 4.5
 },
 {
   id: 4,
   name: 'Phant',
   image: 'https://images.bestsellerclothing.in/data/selected/01-april-2024/236413102_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto',
   price: 1600,
   originalPrice: 1200,
   rating: 4.5
 }
];

const ProductSection = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart function

  return (
    <section className="pro">
      <h1>Men's <span>store</span></h1>
      <div className="products">
        {Mens.map(product => (
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

export default ProductSection;
