import { useContext } from "react";
import style from "./home.module.css";
import { AuthContext } from "../../contexts/auth";

export function Home() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <h1>Home</h1>
      <button onClick={logout} type="button">Sair</button>
    </>
  );
}
