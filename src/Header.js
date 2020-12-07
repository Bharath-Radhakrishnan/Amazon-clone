import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span>Hello User</span>
          <span>Sign In</span>
        </div>
        <div className="header__option">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div className="header__option">
          <span>Your</span>
          <span>Prime</span>
        </div>
        <div className="header__option">
          <span>Hello User</span>
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
