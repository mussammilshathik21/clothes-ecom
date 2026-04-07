import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {

const categories = [
"shirts",
"pants",
"tshirt",
"track",
"shoes",
"slippers",
"watch",
"chain",
"ring"

];

return (

<div className="categories">

<h2>Shop By Category</h2>

<div className="category-grid">

{categories.map((item,index)=>(
<Link key={index} to={`/category/${item}`} className="category-btn">
{item}
</Link>
))}

</div>

</div>

)

}

export default Categories;