import AdminLayout from "./AdminLayout";
import "./admin.css";

function AdminDashboard() {
  return (
    <AdminLayout>

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Products</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <p>45</p>
        </div>

        <div className="card">
          <h3>Total Users</h3>
          <p>30</p>
        </div>

      </div>

    </AdminLayout>
  );
}

export default AdminDashboard;