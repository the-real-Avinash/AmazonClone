import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProviders/StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">Amazon</h2>
        </div>
      </NavLink>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <NavLink to="/checkout" style={{ textDecoration: "none" }}>
          <div className="itemBasket">
            <ShoppingBasketIcon />
            <span className="nav_itemLineTwo newBasketCount">
              {basket.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
