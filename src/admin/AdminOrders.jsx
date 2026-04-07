import AdminLayout from "./AdminLayout";
import "./admin.css";

function AdminOrders(){

const orders = [
{id:101,user:"John",total:2500},
{id:102,user:"Ali",total:4000},
{id:103,user:"David",total:1800}
]

return(

<AdminLayout>

<h1>Orders</h1>

<table className="admin-table">

<thead>
<tr>
<th>Order ID</th>
<th>User</th>
<th>Total</th>
</tr>
</thead>

<tbody>

{orders.map((o)=>(
<tr key={o.id}>
<td>{o.id}</td>
<td>{o.user}</td>
<td>{o.total}</td>
</tr>
))}

</tbody>

</table>

</AdminLayout>

)

}

export default AdminOrders