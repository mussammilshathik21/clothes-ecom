import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";

import "./ProductCard.css";

function ProductCard({ product }) {

const { addToCart } = useContext(CartContext);
const { addFavorite } = useContext(FavoriteContext);

return (

<div className="product-card">

<div className="product-card-image">

<Link to={`/product/${product.id}`}>
<img src={product.image} alt={product.name}/>
</Link>

<button
className="favorite-btn"
onClick={()=>addFavorite(product)}
>
<FaHeart/>
</button>

</div>

<div className="product-info">

<h3>{product.name}</h3>

<p className="price">${product.price}</p>

<button
className="cart-btn"
onClick={()=>addToCart(product)}
>

<FaShoppingCart/> Add to Cart

</button>

</div>

</div>

)

}

export default ProductCard;