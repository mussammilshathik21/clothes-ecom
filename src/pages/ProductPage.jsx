import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import API from "../api/api";
import { CartContext } from "../context/CartContext";

import "./ProductPage.css";

function ProductPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await API.get(`/products/${id}/`);

        setProduct(res.data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchProduct();

  }, [id]);

  const handleAddToCart = async () => {

    if (!product) return;

    const token = localStorage.getItem("access");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (product.sizes && product.sizes.length > 0 && !size) {
      alert("Please select size");
      return;
    }

    await addToCart(product.id, size);

    alert("Added to cart");

  };

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Loading...</h2>;
  }

  return (

    <div className="product-page">

      <div className="product-page-image">

        <img
          src={`https://django-ecommerce-backend-rbsw.onrender.com${product.image}`}
          alt={product.name}
        />

      </div>

      <div className="product-details">

        <h2>{product.name}</h2>

        <p className="price">${product.price}</p>

        {product.sizes && product.sizes.length > 0 && (

          <>
            <h4>Select Size</h4>

            <div className="sizes">

              {product.sizes.map((s) => (

                <button
                  key={s}
                  className={size === s ? "size active" : "size"}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>

              ))}

            </div>

          </>

        )}

        <button
          className="add-cart"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

      </div>

    </div>

  );

}

export default ProductPage;