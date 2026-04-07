import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

import "./Cart.css";

function CartPage(){

const navigate = useNavigate();

const [cart,setCart] = useState([]);

useEffect(()=>{

API.get("/cart/")
.then(res=>{
setCart(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);

const removeItem = async(id)=>{

try{

await API.delete(`/cart/remove/${id}/`);

setCart(cart.filter(item => item.id !== id));

}catch(err){

console.log(err);

}

};

const total = cart.reduce(
(total,item)=> total + item.product.price * item.quantity,
0
);

const handleCheckout = ()=>{

navigate("/order");

};

if(cart.length === 0){

return <h2 style={{padding:"40px"}}>Your cart is empty</h2>

}

return(

<div className="cart-page">

<h2>My Cart</h2>

{cart.map(item=>(

<div className="cart-item" key={item.id}>

<img
src={`http://127.0.0.1:8000${item.product.image}`}
alt={item.product.name}
/>

<div className="cart-info">

<h3>{item.product.name}</h3>

<p>${item.product.price}</p>

{item.size && <p>Size: {item.size}</p>}

<p>Qty: {item.quantity}</p>

</div>

<button
className="remove-btn"
onClick={()=>removeItem(item.id)}
>
Remove
</button>

</div>

))}

<div className="cart-total">

<h3>Total: ${total}</h3>

<button
className="checkout-btn"
onClick={handleCheckout}
>
Checkout
</button>

</div>

</div>

);

}

export default CartPage;