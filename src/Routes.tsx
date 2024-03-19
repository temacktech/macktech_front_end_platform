import { Route, Routes, Navigate } from "react-router-dom";

import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
