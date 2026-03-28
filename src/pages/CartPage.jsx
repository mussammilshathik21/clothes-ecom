import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-grid">
        {cart.map((item, index) => (
          <div key={index} className="cart-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h3>Total: ${total}</h3>
      <button
        className="order-btn"
        onClick={() => navigate("/login")}
      >
        Order Now
      </button>
    </div>
  );
}
export default CartPage;