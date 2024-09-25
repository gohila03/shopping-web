import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported
import '../style/Wallpaper.css'; 

const Wallpaper = () => {
  return (
    <section className="catlog">
      <img
        src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=ais_user"
        alt="girl"
      />

      <div className="mainpic">
        <p>
          Lowest price's best <br /> <span>quality shopping</span>
        </p>

        <div className="box">
          <div>
            <h4>
              <i className="fa-solid fa-truck"></i> Free Delivery
            </h4>
          </div>
          <div className="vl"></div>
          <div>
            <h4>
              <i className="fa-solid fa-sack-dollar"></i> Cash On Delivery
            </h4>
          </div>
          <div className="vl"></div>
          <div>
            <h4>
              <i className="fa-solid fa-person-walking-arrow-loop-left"></i> Easy Returns
            </h4>
          </div>
        </div>

        <button>
          <b>Shop Now</b>
        </button>
      </div>
    </section>
  );
};

export default Wallpaper;
