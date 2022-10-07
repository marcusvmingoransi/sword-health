import React, { ReactNode } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../../context/auth-context";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
