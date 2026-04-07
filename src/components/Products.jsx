import { useEffect, useState } from "react";
import API from "../api/api";

import ProductCard from "./ProductCard";

import "./Products.css";

function Products(){

const [products,setProducts] = useState([]);

useEffect(()=>{

API.get("/products/")
.then(res=>{
setProducts(res.data.products);
})
.catch(err=>{
console.log(err);
});

},[]);

return(

<div className="products-grid">

{products.map(product=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

);

}

export default Products;