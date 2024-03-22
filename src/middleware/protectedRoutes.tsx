import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  isAuthenticated: boolean;
  redirectPath: string;
  children: React.ReactNode;
}

export const ProtectedRoutes = ({
  isAuthenticated,
  redirectPath,
  children,
}: ProtectedRoutesProps) => {
  return isAuthenticated ? children : <Navigate to={redirectPath} replace />;
};
