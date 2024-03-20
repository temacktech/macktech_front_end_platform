import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";

import { LoginData, LoginSchema } from "./schema/loginSchema";

import bgInformations from "../../assets/images/bgLoginInformations.webp";
import logo from "../../assets/images/logo.png";

import style from "./login.module.css";
import { useState } from "react";

export function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const passwordVisibilityType = visiblePassword ? "text" : "password";

  function handlePasswordVisibility() {
    setVisiblePassword(!visiblePassword);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  function handleLogin({ drt, password }: LoginData) {
    console.log(drt, password);
  }

  return (
    <main className={style.container}>
      <section className={style.informations}>
        <img
          data-aos="zoom-in"
          src={bgInformations}
          alt="Formação continuada"
        />
      </section>
      <section
        data-aos="fade-left"
        data-aos-duration="600"
        className={style.login}
      >
        <div className={style.wrapper}>
          <img src={logo} alt="Selo Macktech" />
          <form
            onSubmit={handleSubmit(handleLogin)}
            className={style.loginForm}
          >
            <h1>Acesse a plataforma</h1>
            <h2>
              Faça login para começar a explorar os conteúdos de tecnologia
              ainda hoje.
            </h2>
            <div className={style.fieldPacker}>
              <label>DRT</label>
              <input
                className={`${errors.drt ? style.invalidField : ""}`}
                type="number"
                placeholder="Digite seu DRT"
                {...register("drt")}
                required
              />
              {errors.drt && <span>{errors.drt.message}</span>}
            </div>
            <div className={style.fieldPacker}>
              <label>Senha</label>
              <input
                className={`${errors.password ? style.invalidField : ""}`}
                type={passwordVisibilityType}
                placeholder="Digite sua Senha"
                {...register("password")}
                required
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div className={style.checkbox}>
              <input
                type="checkbox"
                name="visiblePassword"
                checked={visiblePassword}
                onChange={handlePasswordVisibility}
              />
              <label>Exibir senha</label>
            </div>
            <button type="submit">Entrar</button>
            <footer className={style.forgotPassword}>
              <h3>Esqueceu a senha?</h3>
              <Link to={"/forgot_password"}>Redefina-a</Link>
            </footer>
          </form>
        </div>
      </section>
    </main>
  );
}
