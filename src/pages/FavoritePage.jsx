import { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "../components/ProductCard";

function FavoritePage(){

const [favorites,setFavorites] = useState([]);

useEffect(()=>{

API.get("/products/favorites/")
.then(res=>{
setFavorites(res.data);
})

},[]);

return(

<div>

<h2>My Wishlist</h2>

<div className="products-grid">

{favorites.map(item=>(
<ProductCard key={item.id} product={item.product}/>
))}

</div>

</div>

);

}

export default FavoritePage;