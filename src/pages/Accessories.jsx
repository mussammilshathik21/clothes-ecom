import { useLocation } from "react-router-dom";

function Accessories(){

const location = useLocation();

const query = new URLSearchParams(location.search);

const type = query.get("type");

return(

<div>

<h2>{type ? type.toUpperCase() : "All Accessories"}</h2>

</div>

)

}

export default Accessories;