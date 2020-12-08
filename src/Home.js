import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/26th_GWM51/Rv1/P38983965_IN_WLME_SamsungGalaxy_M51_Design_Change_1500x600_1._CB416037929_.jpg"
          alt="sorry.error"
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={19.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
