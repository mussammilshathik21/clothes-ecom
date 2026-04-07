import { useState } from "react";
import AdminLayout from "./AdminLayout";
import "./admin.css";

function AdminProducts(){

const [products,setProducts] = useState([
{id:1,name:"Shirt",price:1200},
{id:2,name:"Pant",price:1500}
])

const [name,setName] = useState("")
const [price,setPrice] = useState("")

const addProduct = () => {

if(!name || !price) return

const newProduct = {
id: Date.now(),
name,
price
}

setProducts([...products,newProduct])

setName("")
setPrice("")
}

return(

<AdminLayout>

<h1>Products</h1>

<div className="product-form">

<input
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<button onClick={addProduct}>
Add Product
</button>

</div>

<table className="admin-table">

<thead>

<tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{products.map((p)=>(

<tr key={p.id}>

<td>{p.id}</td>
<td>{p.name}</td>
<td>{p.price}</td>

<td>
<button>Edit</button>
<button>Delete</button>
</td>

</tr>

))}

</tbody>

</table>

</AdminLayout>

)

}

export default AdminProducts