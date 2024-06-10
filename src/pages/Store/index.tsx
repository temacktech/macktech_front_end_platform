import { Header } from "../../components/Header/header";
import { Sidebar } from "../../components/Sidebar/sidebar";

import style from "./store.module.css";

export function Store() {
  const pageName = "Loja";

  return (
    <main className={style.store}>
      <Sidebar title={pageName} />
      <section className={style.wrapper}>
        <Header title={pageName} />
        <div className={style.content}>
          <h1 data-aos="zoom-in">
            Atualmente, estamos trabalhando para trazer recompensas incríveis
            para você!
          </h1>
        </div>
      </section>
    </main>
  );
}
