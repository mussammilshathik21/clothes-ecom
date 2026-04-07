import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import OrderPage from "./pages/orderPage";
import MyOrders from "./pages/MyOrders"

/* Admin Pages */
import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AdminOrders from "./admin/AdminOrders";
import AdminUsers from "./admin/AdminUsers";

function App() {

  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>

      {/* Hide navbar in admin */}
      {!isAdmin && <Navbar />}

      <Routes>

        {/* USER ROUTES */}

        <Route path="/" element={<Home />} />

        <Route path="/category/:categoryName" element={<CategoryPage />} />

        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/favorite" element={<FavoritePage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/order" element={<OrderPage />} />

        <Route path="/orders" element={<MyOrders />} />

        {/* ADMIN ROUTES */}

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/products" element={<AdminProducts />} />

        <Route path="/admin/orders" element={<AdminOrders />} />

        <Route path="/admin/users" element={<AdminUsers />} />

      </Routes>

      {/* Hide footer in admin */}
      {!isAdmin && <Footer />}

    </>
  );
}

export default App;