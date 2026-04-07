import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-content">
        {children}
      </div>

    </div>
  );
}

export default AdminLayout;