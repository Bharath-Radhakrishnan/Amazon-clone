import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
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
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionline1">Hello User</span>
          <span className="header__optionline2">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionline1"> Returns</span>
          <span className="header__optionline2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionline1">Your</span>
          <span className="header__optionline2">Prime</span>
        </div>
        <div className="header__optionBasketIcon">
          <ShoppingCartOutlinedIcon />
          <span className="header__optionline2 header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
