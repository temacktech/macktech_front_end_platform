import { useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

import { Sidebar } from "../../components/Sidebar/sidebar";
import { Header } from "../../components/Header/header";

import activity from "../../assets/icons/activities-list.png";

import style from "./home.module.css";

export function Home() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const { firstAccess } = user?.user!;

  function firstAccessVerification() {
    if (firstAccess) {
      return navigate("/resetPassword");
    }

    return;
  }

  useEffect(() => {
    firstAccessVerification();
  }, [user]);

  function handleNavigationTrails() {
    navigate("/trails");
  }

  const pageName = "Inicio";

  return (
    <main className={style.home}>
      <Sidebar title={pageName} />
      <section className={style.wrapper}>
        <Header title={pageName} />
        <div className={style.content}>
          <div data-aos="zoom-in" className={style.banner}>
            <div className={style.informations}>
              <h1>
                Explore as Trilhas: Tecnologia Educacional ao seu Alcance!
              </h1>
              <h2>
                Descubra Conhecimentos Inovadores e Transforme sua Prática
                Pedagógica! 🚀📚
              </h2>
              <button type="button" onClick={handleNavigationTrails}>
                Quero explorar
              </button>
            </div>
            <img src={activity} alt="icone de atividade" />
          </div>
        </div>
      </section>
    </main>
  );
}
