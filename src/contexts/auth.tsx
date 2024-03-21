import { createContext, useState } from "react";

import { User } from "../types/user";
import { Role } from "../types/role";

import UserApi from "../api/userApi";

interface UserData {
  user: User;
  role: Role;
}

type UserLogin = Pick<User, "drt" | "password">;

interface AuthContextProps {
  user: UserData | null;
  isAuthenticated: boolean;
  checkAuthentication: () => void;
  //login: ({ drt, password }: UserLogin) => void;
  //logout: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function checkAuthentication() {
    UserApi.post("/check_user_auth").then((res) => {
      const { data, status } = res;

      if (status === 200) {
        return console.log(data);
      }
    });
  }

  checkAuthentication()

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, checkAuthentication }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
