import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import API from "../api/api";

import "./ProductCard.css";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  const [liked, setLiked] = useState(false);


  // =====================
  // TOGGLE FAVORITE
  // =====================
  const toggleFavorite = async () => {

    try {

      const res = await API.post("/products/favorites/toggle/", {
        product_id: product.id
      });

      if (res.data.status === "added") {
        setLiked(true);
      } else {
        setLiked(false);
      }

    } catch (err) {

      alert("Please login first");

    }

  };


  return (

    <div className="product-card">

      {/* HEART BUTTON */}
      <button
        className={`heart-btn ${liked ? "active" : ""}`}
        onClick={toggleFavorite}
      >
        <FaHeart />
      </button>


      {/* PRODUCT IMAGE */}
      <Link to={`/product/${product.id}`}>

        <img
          src={`http://127.0.0.1:8000${product.image}`}
          alt={product.name}
        />

      </Link>


      {/* PRODUCT INFO */}
      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="price">${product.price}</p>

      </div>


      {/* ADD TO CART */}
      <button
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart /> Add To Cart
      </button>

    </div>

  );

}

export default ProductCard;