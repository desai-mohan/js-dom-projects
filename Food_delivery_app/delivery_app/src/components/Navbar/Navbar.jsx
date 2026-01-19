import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Outlet } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const { cartItems } = useContext(StoreContext);
  console.log(Object.keys(cartItems).length);
  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <li
            className={menu === "home" ? "active1" : ""}
            onClick={() => setMenu("home")}
          >
            Home
          </li>
          <li
            className={menu === "menu" ? "active1" : ""}
            onClick={() => setMenu("menu")}
          >
            menu
          </li>
          <li
            className={menu === "mobile-app" ? "active1" : ""}
            onClick={() => setMenu("mobile-app")}
          >
            mobile-app
          </li>
          <li
            className={menu === "contact-us" ? "active1" : ""}
            onClick={() => setMenu("contact-us")}
          >
            contact us
          </li>
        </ul>

        <div className="navbar-right">
          <img src={assets.search_icon} />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot">{Object.keys(cartItems).length}</div>
          </div>
          <button>sign in</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
