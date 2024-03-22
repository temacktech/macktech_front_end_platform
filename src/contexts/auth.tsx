import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

import { User } from "../types/user";
import { Role } from "../types/role";

import UserApi from "../api/userApi";

interface UserData {
  user: User;
  role: Role;
}

type UserLoginRequest = Pick<User, "drt" | "password">;

interface AuthContextProps {
  user: UserData | null;
  isAuthenticated: boolean;
  checkAuthentication: () => void;
  login: ({ drt, password }: UserLoginRequest) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  function checkAuthentication() {
    UserApi.post("/check_user_auth")
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          setUser(data);
          localStorage.setItem("data-user", JSON.stringify(data));
          setIsAuthenticated(true);
          navigate("/home");
        }
      })
      .catch(() => {
        setUser(null);
        localStorage.removeItem("data-user");
        setIsAuthenticated(false);
      });
  }

  function login({ drt, password }: UserLoginRequest) {
    UserApi.post("/auth", {
      drt,
      password,
    })
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          setUser(data);
          localStorage.setItem("data-user", JSON.stringify(data));
          setIsAuthenticated(true);
          navigate("/home");
        }
      })
      .catch((error) => {
        const { data } = error.response;

        toast.warning(data);
      });
  }

  function logout() {
    UserApi.get("/logout")
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          setUser(null);
          localStorage.removeItem("data-user");
          localStorage.removeItem("trails");
          setIsAuthenticated(false);
          toast.success(data);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, checkAuthentication, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
