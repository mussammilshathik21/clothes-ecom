import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const login = (email, password) => {

    setUser({
      name: "User", 
      email: email
    });

  };

  const signup = (name, email, password) => {

    setUser({
      name: name,
      email: email
    });

  };

  const logout = () => {
    setUser(null);
  };

  return (

    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>

  );

}