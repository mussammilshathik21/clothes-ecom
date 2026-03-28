import shirts from "../data/shirts";
import pants from "../data/pants";
import tshirts from "../data/tshirts";

import ProductCard from "../components/ProductCard";
import "./cloths.css";
function Cloths(){

return(

<div className="cloths-section">

<h2>Shirts</h2>

<div className="cloths-grid">
{shirts.map((item)=>(
<ProductCard key={item.id} {...item}/>
))}
</div>


<h2>Pants</h2>

<div className="cloths-grid">
{pants.map((item)=>(
<ProductCard key={item.id} {...item}/>
))}
</div>


<h2>T-Shirts</h2>

<div className="cloths-grid">
{tshirts.map((item)=>(
<ProductCard key={item.id} {...item}/>
))}
</div>

</div>

)

}

export default Cloths;