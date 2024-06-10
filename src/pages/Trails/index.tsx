import { Sidebar } from "../../components/Sidebar/sidebar";
import { Header } from "../../components/Header/header";

import style from "./trails.module.css";
import { Card } from "../../components/Card/card";

export function Trails() {
  const pageName = "Trilhas";

  return (
    <main className={style.trails}>
      <Sidebar title={pageName} />
      <section className={style.wrapper}>
        <Header title={pageName} />
        <div className={style.content}>
          <Card />
        </div>
      </section>
    </main>
  );
}
