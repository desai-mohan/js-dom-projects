import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite Food here</h2>
        <p>
          We deliver food from your favourite restaurants straight to your door.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
