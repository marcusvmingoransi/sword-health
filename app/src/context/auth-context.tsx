import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "../utils/helpers";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuth {
  token: string;
  onLogin: () => void;
  onLogout: () => void;
}

const INITIAL_VALUES: IAuth = {
  token: "",
  onLogin: () => {},
  onLogout: () => {},
};
const AuthContext = createContext(INITIAL_VALUES);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();

  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(String(token));
    navigate("/home");
  };

  const handleLogout = () => {
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
