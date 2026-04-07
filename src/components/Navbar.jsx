import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {

  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <h2 className="logo">
          <Link to="/">BrandName</Link>
        </h2>

        {/* DESKTOP LINKS */}
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

        {/* ICONS + MOBILE MENU */}
        <div className="nav-icons">

          <div className="icon-group">

            <Link to="/favorite">
              <FaHeart />
            </Link>

            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>

            <Link to="/profile">
              <FaUser />
            </Link>

          </div>

          {/* MOBILE BUTTON */}
          <div
            className="mobile-menu-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <FaBars />
          </div>

          {/* MOBILE DROPDOWN */}
          {mobileMenu && (
            <div className="mobile-dropdown">

              <Link to="/" onClick={closeMenu}>Home</Link>

              <Link to="/category/shirts" onClick={closeMenu}>Shirts</Link>
              <Link to="/category/pants" onClick={closeMenu}>Pants</Link>
              <Link to="/category/tshirts" onClick={closeMenu}>T-Shirts</Link>
              <Link to="/category/track" onClick={closeMenu}>Trackpants</Link>

              <Link to="/category/shoes" onClick={closeMenu}>Shoes</Link>
              <Link to="/category/slippers" onClick={closeMenu}>Slippers</Link>

              <Link to="/category/watch" onClick={closeMenu}>Watch</Link>
              <Link to="/category/chain" onClick={closeMenu}>Chain</Link>
              <Link to="/category/ring" onClick={closeMenu}>Ring</Link>

              <hr />

              <Link to="/favorite" onClick={closeMenu}>Favorite</Link>
              <Link to="/cart" onClick={closeMenu}>Cart</Link>
              <Link to="/profile" onClick={closeMenu}>Profile</Link>

            </div>
          )}

        </div>

      </div>

    </nav>

  );

}

export default Navbar;