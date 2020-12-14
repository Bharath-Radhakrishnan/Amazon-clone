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
            id={1}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id={2}
            title="Lenovo Legion 5i 10th Gen Intel Core i5 15.6 inch Full HD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA GTX 1650 4GB GDDR6 Graphics/Phantom Black/2.3Kg)"
            price={150}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="TIMEWEAR Analogue Digital Sports Stainless Steel Chain Watch for Men & Boys - TIMEWEAR 1514G"
            price={10}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/8181j%2BOaZhL._UY879_.jpg"
          />
          <Product
            id={4}
            title="The Water Quality Enterprise Aqua Glory 14 Litter RO+UV+UF+TDS Controller (Blue)"
            price={40}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61KdmhQY87L._SL1280_.jpg"
          />
          <Product
            id={5}
            title="Boult Audio BassBuds X1 in-Ear Wired Earphones with Mic and 10mm Powerful Driver for Extra Bass and HD Sound (Red)"
            price={13}
            rating={4}
            image="https://m.media-amazon.com/images/I/51cMtuIw27L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="OnePlus 8 (Onyx Black 8GB RAM+128GB Storage)"
            price={100}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41DGKqs+UuL._AC_US160_FMwebp_QL70_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
