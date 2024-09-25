// import React from 'react';
import '../style/Menu.css'; // Ensure you have corresponding styles

const ScrollingSection = () => {
  return (
    <section className="scrolling">
      <div className="topic" id="top">
        <h2>
          <span>Top Categories</span>
        </h2>
      </div>

      <div className="box-2">
        <h2>
          <center>Be Fashion Forward</center>
        </h2>

        <div className="flex">
          {/* Women's store */}
          <div className="boxflex flex-1">
            <h4>Women's Store</h4>
            <div className="women">
              <div>
                <img
                  src="https://ibacosmetics.com/cdn/shop/products/Untitleddesign_28.jpg?v=1657098151&width=800"
                  alt="Beauty"
                />
                <p>Beauty</p>
              </div>
              <div>
                <img
                  src="https://images.meesho.com/images/products/85630166/cisnh_400.webp"
                  alt="Jewelry"
                />
                <p>Jewelry</p>
              </div>
              <div>
                <img
                  src="https://images.meesho.com/images/products/148853654/ncqbe_1200.jpg"
                  alt="Handbag"
                />
                <p>Handbag</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhZGllcyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D"
                  alt="Clothing"
                />
                <p>Clothing</p>
              </div>
            </div>
          </div>

          {/* Men's store */}
          <div className="boxflex flex-2">
            <h4>Men's Store</h4>
            <div className="men">
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/pile-clothes-isolated-background-cartoon-vector-illustration_76964-6392.jpg?size=626&ext=jpg&ga=GA1.1.212828076.1676445660&semt=sph"
                  alt="Clothing"
                />
                <p>Clothing</p>
              </div>
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/02/19/67/78/240_F_219677885_6Y5Qh9tvNsuqBmAmZW0PpmdQWh6aKONG.jpg"
                  alt="Belt"
                />
                <p>Belt</p>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/2147492875/photo/close-up-of-a-watch-with-a-brown-leather-strap-hand.jpg?s=612x612&w=0&k=20&c=_y4plHL4s56rnFuZTPYemtflPUZsRQYCJxubnKyNKNQ="
                  alt="Watch"
                />
                <p>Watch</p>
              </div>
              <div>
                <img
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTktolS36sNc5v44Pg1mQqhaecSLnMJnCecOhCNr3kdEnRpVW3ra6vV-_t2UHzIoqRrMfMvviS9G6pTs4ausCNVORWrqRfPOAiQPLuGVMTsBT6n1xMy9SY0EPtx9aQiRx87xo5kARLQ-Q4&usqp=CAc"
                  alt="Shoes"
                />
                <p>Shoes</p>
              </div>
            </div>
          </div>

          {/* Kid's store */}
          <div className="boxflex flex-3">
            <h4>Kid's Store</h4>
            <div className="kids">
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/trendy-outfit-boys_545377-15639.jpg?size=626&ext=jpg&ga=GA1.1.212828076.1676445660&semt=ais_user"
                  alt="Boys"
                />
                <p>Boys</p>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/cool-chicks-sunglasses-front-white-wall_88260-133.jpg?w=740"
                  alt="Girls"
                />
                <p>Girls</p>
              </div>
              <div>
                <img
                  src="https://img.freepik.com/free-photo/objects-showing-its-girl-expectancy_23-2150166726.jpg?size=626&ext=jpg&ga=GA1.1.212828076.1676445660&semt=ais_user"
                  alt="Accessories"
                />
                <p>Accessories</p>
              </div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2024/04/20/17/17/ai-generated-8709127_640.png"
                  alt="Toys"
                />
                <p>Toys</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingSection;
