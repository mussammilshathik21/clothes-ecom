import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import "./Favorite.css";

function FavoritePage(){

const { favorites, removeFavorite } = useContext(FavoriteContext);

return(

<div className="favorite-page">

<h2 className="favorite-title">Favorite Products</h2>

<div className="favorite-grid">

{favorites.map((item)=>(

<div key={item.id} className="favorite-card">

<img src={item.image} alt={item.name}/>

<h3>{item.name}</h3>

<p>${item.price}</p>

<button onClick={()=>removeFavorite(item.id)}>
Remove
</button>

</div>

))}

</div>

</div>

)

}

export default FavoritePage;