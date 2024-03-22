import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, LoginSchema } from "./Schema/loginSchema";

import { AuthContext } from "../../contexts/auth";

import bgInformations from "../../assets/images/bgLoginInformations.webp";
import logo from "../../assets/images/logo.png";

import { Loader } from "../../components/Loader/loader";

import style from "./login.module.css";

export function Login() {
  const { isAuthenticated, checkAuthentication, login } =
    useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      checkAuthentication();
      setisLoading(false);
    }, 2000);
  }, [isAuthenticated]);

  const [isLoading, setisLoading] = useState(true);

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

  function handleAuth({ drt, password }: LoginData) {
    login({ drt, password });
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                onSubmit={handleSubmit(handleAuth)}
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
                    autoComplete="off"
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
                <button type="submit">Entrar"</button>
                <footer className={style.resetPassword}>
                  <h3>Esqueceu a senha?</h3>
                  <Link to={"/resetPassword"}>Redefina-a</Link>
                </footer>
              </form>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
