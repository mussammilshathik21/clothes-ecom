import AdminLayout from "./AdminLayout";
import "./admin.css";

function AdminUsers(){

const users = [
{id:1,name:"John",email:"john@gmail.com"},
{id:2,name:"Ali",email:"ali@gmail.com"},
{id:3,name:"David",email:"david@gmail.com"}
]

return(

<AdminLayout>

<h1>Users</h1>

<table className="admin-table">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
</tr>
</thead>

<tbody>

{users.map((u)=>(
<tr key={u.id}>
<td>{u.id}</td>
<td>{u.name}</td>
<td>{u.email}</td>
</tr>
))}

</tbody>

</table>

</AdminLayout>

)

}

export default AdminUsers