import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function OrderPage(){

const [message,setMessage] = useState("");

const navigate = useNavigate();

const placeOrder = async ()=>{

try{

const res = await API.post("/orders/create/");

setMessage("Order placed successfully");

setTimeout(()=>{

navigate("/profile");

},1500);

}catch(err){

console.log(err.response?.data);

setMessage("Cart empty");

}

};

return(

<div>

<h2>Checkout</h2>

<button onClick={placeOrder}>
Place Order
</button>

<p>{message}</p>

</div>

);

}

export default OrderPage;