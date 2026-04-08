import { useEffect, useState } from "react";
import API from "../api/api";
import "./Hero.css";

function Hero(){

const [banner,setBanner] = useState(null);

useEffect(()=>{

API.get("/banners/")
.then(res=>{
setBanner(res.data);
})
.catch(err=>{
console.log(err);
});

},[]);

if(!banner) return null;

return(

<div
className="hero"
style={{
backgroundImage:`url(https://django-ecommerce-backend-rbsw.onrender.com${banner.image})`
}}
>

<div className="hero-text">

<h1>{banner.title}</h1>

<h3>{banner.subtitle}</h3>

</div>

</div>

);

}

export default Hero;