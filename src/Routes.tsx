import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AuthContext } from "./contexts/auth";

import { ProtectedRoutes } from "./middleware/protectedRoutes";

import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";

import { Home } from "./pages/Home";
import { Trails } from "./pages/Trails";
import { Store } from "./pages/Store";
import { Configuration } from "./pages/Configuration";
import { Study } from "./pages/Study";

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
      <Route
        path="/trails"
        element={
          <ProtectedRoutes isAuthenticated={isAuthenticated} redirectPath="/">
            <Trails />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/study"
        element={
          <ProtectedRoutes isAuthenticated={isAuthenticated} redirectPath="/">
            <Study />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/store"
        element={
          <ProtectedRoutes isAuthenticated={isAuthenticated} redirectPath="/">
            <Store />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoutes isAuthenticated={isAuthenticated} redirectPath="/">
            <Configuration />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}
