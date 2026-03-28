import { useLocation } from "react-router-dom";

function Footwears(){

const location = useLocation();

const query = new URLSearchParams(location.search);

const type = query.get("type");

return(

<div>

<h2>{type ? type.toUpperCase() : "All Footwear"}</h2>

</div>

)

}

export default Footwears;