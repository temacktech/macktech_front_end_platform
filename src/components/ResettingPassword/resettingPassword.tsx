import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ResettingPasswordData,
  ResettingPasswordSchema,
} from "./Schema/resettingPasswordSchema";

import { Spinner } from "@chakra-ui/react";
import { toast } from "sonner";

import logo from "../../assets/images/logo.png";

import style from "./resettingPassword.module.css";
import UserApi from "../../api/userApi";
import { useNavigate } from "react-router-dom";

export function ResettingPassword() {
  const navigate = useNavigate();

  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

  const [visiblePasswords, setVisiblePasswords] = useState(false);

  const passwordsVisibilityType = visiblePasswords ? "text" : "password";

  function handlePasswordVisibility() {
    setVisiblePasswords(!visiblePasswords);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResettingPasswordData>({
    resolver: zodResolver(ResettingPasswordSchema),
  });

  function handlePasswordReset({ resetCode, password }: ResettingPasswordData) {
    setButtonIsDisabled(true);

    UserApi.post("/reset_password", {
      resetCode,
      password,
    })
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          toast.success(data);

          setTimeout(() => {
            navigate("/login");
            setButtonIsDisabled(false);
          }, 1500);
        }
      })
      .catch((error) => {
        const errorMessage = error.response.data;

        toast.warning(errorMessage);
        setTimeout(() => {
          setButtonIsDisabled(false);
        }, 1000);
      });
  }

  return (
    <section data-aos="zoom-in" className={style.resettingPassword}>
      <img src={logo} alt="Selo Macktech" />
      <h1>Redefinição de senha</h1>
      <h2>
        Por favor, preencha os campos abaixo para dar continuidade à
        solicitação.
      </h2>
      <form
        onSubmit={handleSubmit(handlePasswordReset)}
        className={style.resettingForm}
      >
        <div className={style.fieldPacker}>
          <label>Código de redefinição</label>
          <input
            className={`${errors.resetCode ? style.inputInvalid : ""}`}
            type="text"
            placeholder="Digite o código de redefinição"
            autoComplete="off"
            {...register("resetCode")}
            required
          />
          {errors.resetCode && <span>{errors.resetCode.message}</span>}
        </div>
        <div className={style.fieldPacker}>
          <label>Digite sua nova senha</label>
          <input
            className={`${errors.password ? style.inputInvalid : ""}`}
            type={passwordsVisibilityType}
            placeholder="Digite sua nova senha"
            autoComplete="off"
            {...register("password")}
            required
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className={style.fieldPacker}>
          <label>Confirme a nova senha</label>
          <input
            className={`${errors.confirmPassword ? style.inputInvalid : ""}`}
            type={passwordsVisibilityType}
            placeholder="Confirme a nova senha"
            autoComplete="off"
            {...register("confirmPassword")}
            required
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <div className={style.checkbox}>
          <input
            type="checkbox"
            name="visiblePassword"
            checked={visiblePasswords}
            onChange={handlePasswordVisibility}
          />
          <label>Exibir senhas</label>
        </div>
        <button
          className={`${errors ? style.blockedInvalidField : ""}`}
          type="submit"
          disabled={buttonIsDisabled}
        >
          {buttonIsDisabled ? <Spinner size="lg" /> : "Redefinir"}
        </button>
      </form>
    </section>
  );
}
