import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // load user if token exists
  useEffect(() => {

    const token = localStorage.getItem("access");

    if (token) {

      API.get("/profile/")
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          logout();
        });

    }

  }, []);

  // login
  const login = async (email, password) => {

    try {

      const res = await API.post("/login/", {
        email,
        password
      });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      const profile = await API.get("/profile/");

      setUser(profile.data);

      navigate("/");

    } catch (err) {

      alert("Invalid credentials");

    }

  };

  // signup
  const signup = async (name, email, password) => {

    try {

      await API.post("/register/", {
        name,
        email,
        password
      });

      login(email, password);

    } catch (err) {

      alert("Signup failed");

    }

  };

  // logout
  const logout = () => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setUser(null);

    navigate("/login");

  };

  return (

    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>

  );

}