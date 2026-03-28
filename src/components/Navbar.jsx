import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import "./Navbar.css";

function Navbar() {

  const { cart } = useContext(CartContext);
  const cartCount = cart.length;

  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (

    <nav className="navbar">

      <h2 className="logo">BrandName</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        {/* CLOTHS */}
        <div className="menu">
          <span onClick={() => toggleMenu("cloths")}>Cloths</span>

          {activeMenu === "cloths" && (
            <div className="dropdown">
              <Link to="/category/shirts">Shirts</Link>
              <Link to="/category/pants">Pants</Link>
              <Link to="/category/tshirts">T-Shirts</Link>
              <Link to="/category/track">Trackpants</Link>
            </div>
          )}
        </div>

        {/* FOOTWEAR */}
        <div className="menu">
          <span onClick={() => toggleMenu("footwear")}>Footwear</span>

          {activeMenu === "footwear" && (
            <div className="dropdown">
              <Link to="/category/shoes">Shoes</Link>
              <Link to="/category/slippers">Slippers</Link>
            </div>
          )}
        </div>

        {/* ACCESSORIES */}
        <div className="menu">
          <span onClick={() => toggleMenu("accessories")}>Accessories</span>

          {activeMenu === "accessories" && (
            <div className="dropdown">
              <Link to="/category/watch">Watch</Link>
              <Link to="/category/chain">Chain</Link>
              <Link to="/category/ring">Ring</Link>
            </div>
          )}
        </div>

      </div>

      <div className="nav-icons">

        <Link to="/favorite">
          <FaHeart />
        </Link>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{cartCount}</span>
        </Link>

        <Link to="/profile">
          <FaUser />
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;