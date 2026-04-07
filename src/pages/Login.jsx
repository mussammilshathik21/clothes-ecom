import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

import "./Auth.css";

function Login(){

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async(e)=>{

e.preventDefault();

try{

const res = await API.post("/login/",{
username,
password
});

localStorage.setItem("access",res.data.access);
localStorage.setItem("refresh",res.data.refresh);

alert("Login successful");

// reload so interceptor uses token
window.location.href="/";

}catch(err){

console.log(err.response?.data);
alert("Invalid username or password");

}

};

return(

<div className="auth-page">

<div className="auth-card">

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
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
Login
</button>

</form>

<p>
No account? <Link to="/signup">Signup</Link>
</p>

</div>

</div>

);

}

export default Login;