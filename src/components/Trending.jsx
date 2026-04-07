import { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "./ProductCard";

import "./Trending.css";

function Trending(){

const [products,setProducts] = useState([]);

useEffect(()=>{

API.get("/products/trending/")
.then(res=>{
setProducts(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);

return(

<section className="trending">

<h2>Trending Products</h2>

<div className="products-grid">

{products.map(product=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

</section>

);

}

export default Trending;