import bgInformations from "../../assets/images/bgLoginInformations.webp";

import style from "./login.module.css";

export function Login() {
  return (
    <main className={style.container}>
      <section className={style.informations}>
        <img
          data-aos="zoom-in"
          src={bgInformations}
          alt="Formação continuada"
        />
      </section>
      <section className={style.login}>
        <h1>Login</h1>
      </section>
    </main>
  );
}
