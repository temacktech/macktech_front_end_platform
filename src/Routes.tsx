import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AuthContext } from "./contexts/auth";

import { ProtectedRoutes } from "./middleware/protectedRoutes";

import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";
import { Home } from "./pages/Home";

export function Router() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route
        path="/home"
        element={
          <ProtectedRoutes isAuthenticated={isAuthenticated} redirectPath="/">
            <Home />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}
