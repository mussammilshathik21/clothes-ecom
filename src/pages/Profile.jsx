import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

import FavoritePage from "./FavoritePage";
import MyOrders from "./MyOrders";

import "./Profile.css";

function Profile() {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("profile");

  const [user, setUser] = useState(null);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("access");

    if (!token) {
      navigate("/login");
      return;
    }

    API.get("/profile/")
      .then(res => {

        setUser(res.data);

        setPhone(res.data.phone || "");
        setAddress(res.data.address || "");

      })
      .catch(err => {
        console.log(err);
      });

  }, [navigate]);


  const handleSave = async () => {

    const formData = new FormData();

    formData.append("phone", phone);
    formData.append("address", address);

    if (profilePic) {
      formData.append("profile_pic", profilePic);
    }

    try {

      const res = await API.put("/profile/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setUser(res.data);

      alert("Profile updated successfully");

    } catch (err) {

      console.log(err);

    }

  };


  const logout = () => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/login");

  };


  if (!user) {
    return <h2 style={{padding:"40px"}}>Loading profile...</h2>;
  }


  return (

    <div className="profile-container">

      {/* SIDEBAR */}
      <div className="profile-sidebar">

        <button onClick={() => setActiveTab("profile")}>
          Profile
        </button>

        <button onClick={() => setActiveTab("orders")}>
          Orders
        </button>

        <button onClick={() => setActiveTab("wishlist")}>
          Wishlist
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>


      {/* CONTENT */}
      <div className="profile-content">

        {activeTab === "profile" && (

          <div className="profile-form">

            <h2>My Profile</h2>

            {/* PROFILE IMAGE */}
            {user.profile_pic && (
              <img
                src={`http://127.0.0.1:8000${user.profile_pic}`}
                alt="Profile"
                className="profile-image"
              />
            )}

            <input
              type="file"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />

            <p><b>Username:</b> {user.username}</p>

            <p><b>Email:</b> {user.email}</p>

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <button onClick={handleSave}>
              Save Profile
            </button>

          </div>

        )}

        {activeTab === "orders" && (
          <MyOrders />
        )}

        {activeTab === "wishlist" && (
          <FavoritePage />
        )}

      </div>

    </div>

  );

}

export default Profile;