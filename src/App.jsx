import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

import ProductPage from "./pages/ProductPage";

import CartPage from "./pages/CartPage";
import FavoritePage from "./pages/FavoritePage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import Footer from "./components/Footer";

function App(){

return(

<>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />


<Route path="/category/:categoryName" element={<CategoryPage />} />

<Route path="/product/:id" element={<ProductPage />} />


<Route path="/cart" element={<CartPage />} />

<Route path="/favorite" element={<FavoritePage />} />

<Route path="/login" element={<Login />} />

<Route path="/signup" element={<Signup />} />

<Route path="/profile" element={<Profile />} />

</Routes>

<Footer/>

</>

)

}

export default App;