import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // redirect to login if user not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (

    <div className="profile-page">

      <div className="profile-sidebar">

        <h3>Hello, {user.name}</h3>

        <ul>
          <li>Profile Details</li>
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Addresses</li>
          <li>Coupons</li>
        </ul>

        <button
          className="logout-btn"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>

      </div>

      <div className="profile-content">

        <h2>Profile Details</h2>

        <div className="profile-card">

          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> Not Added</p>
          <p><b>Gender:</b> Not Added</p>

        </div>

      </div>

    </div>

  );
}

export default Profile;