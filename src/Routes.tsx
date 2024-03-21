import { Route, Routes, Navigate } from "react-router-dom";

import { Login } from "./pages/Login";
import { ResetPassword } from "./pages/ResetPassword";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
    </Routes>
  );
}
