import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import products from "../data/products";
import { CartContext } from "../context/CartContext";

import "./ProductPage.css";

function ProductPage(){

const { id } = useParams();

const product = products.find((item)=> item.id === Number(id));

const { addToCart } = useContext(CartContext);

const [size,setSize] = useState("");

if(!product) return <h2>Product not found</h2>;

return(

<div className="product-page">

<div className="product-page-image">
<img src={product.image} alt={product.name}/>
</div>

<div className="product-details">

<h2>{product.name}</h2>

<p className="price">${product.price}</p>

{/* show sizes only if available */}

{product.sizes && (

<>
<h4>Select Size</h4>

<div className="sizes">

{product.sizes.map((s)=>(
<button
key={s}
className={size===s ? "size active":"size"}
onClick={()=>setSize(s)}
>
{s}
</button>
))}

</div>
</>

)}

<button
className="add-cart"
onClick={()=>addToCart(product)}
>
Add To Cart
</button>

</div>

</div>

)

}

export default ProductPage;