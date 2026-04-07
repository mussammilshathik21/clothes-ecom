import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

import "./Auth.css";

function Signup() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      await API.post("/register/",{
        username: name,
        email: email,
        password: password
      });

      alert("Account created successfully");

      navigate("/login");

    }catch(err){

      console.log(err);
      alert("Signup failed");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Signup
          </button>

        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>

    </div>

  );

}

export default Signup;