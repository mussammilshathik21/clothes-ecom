import axios from "axios";

const API = axios.create({
  baseURL: "https://django-ecommerce-backend-rbsw.onrender.com",
});

API.interceptors.request.use((req) => {

  const token = localStorage.getItem("access");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;

});

export default API;