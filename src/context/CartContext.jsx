import { createContext, useState, useEffect } from "react";
import API from "../api/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // Load cart items
  const loadCart = async () => {

    const token = localStorage.getItem("access");

    if (!token) return;

    try {

      const res = await API.get("/cart/");

      setCart(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {
    loadCart();
  }, []);

  // Add item to cart
  const addToCart = async (productId, size = null) => {

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first");
      return;
    }

    console.log("Sending product_id:", productId);

    try {

      await API.post("/cart/add/", {
        product_id: productId,
        quantity: 1,
        size: size
      });

      loadCart();

    } catch (err) {

      console.log(err.response?.data);

    }

  };

  // Remove item
  const removeFromCart = async (id) => {

    try {

      await API.delete(`/cart/remove/${id}/`);

      loadCart();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        reloadCart: loadCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

};