import { Header } from "../../components/Header/header";
import { Sidebar } from "../../components/Sidebar/sidebar";

import style from "./configuration.module.css";

export function Configuration() {
  const pageName = "Configurações";

  return (
    <main className={style.store}>
      <Sidebar title={pageName} />
      <section className={style.wrapper}>
        <Header title={pageName} />
        <div className={style.content}></div>
      </section>
    </main>
  );
}
