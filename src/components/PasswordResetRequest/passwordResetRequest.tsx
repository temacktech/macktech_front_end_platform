import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PasswordResetRequestSchema,
  PasswordResetRequestData,
} from "./Schema/passwordResetRequestSchema";

import { Spinner } from "@chakra-ui/react";
import { toast } from "sonner";

import logo from "../../assets/images/logo.png";

import style from "./passwordResetRequest.module.css";
import UserApi from "../../api/userApi";

type ResettingPasswordProps = { advancingPasswordResetProcess: () => void };

export function PasswordResetRequest({
  advancingPasswordResetProcess,
}: ResettingPasswordProps) {
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetRequestData>({
    resolver: zodResolver(PasswordResetRequestSchema),
  });

  function handlePasswordResetRequest({ drt }: PasswordResetRequestData) {
    setButtonIsDisabled(true);

    UserApi.post(`/forgot_password/${drt}`)
      .then((res) => {
        const { status } = res;

        if (status === 200) {
          toast.success("Enviamos um código de verificação para o seu e-mail.");
          advancingPasswordResetProcess();
          setTimeout(() => {
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

  function handleReturnLoginPage() {
    navigate("/login");
  }

  return (
    <section data-aos="zoom-in" className={style.passwordResetRequest}>
      <img src={logo} alt="Selo Macktech" />
      <h1>Redefinição de senha</h1>
      <h2>Digite seu DRT para continuar com a solicitação.</h2>
      <form
        onSubmit={handleSubmit(handlePasswordResetRequest)}
        className={style.resetForm}
      >
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
        <div className={style.wrapper}>
          <button type="button" onClick={handleReturnLoginPage}>
            Voltar
          </button>
          <button
            className={`${errors.drt ? style.blockedInvalidField : ""}`}
            type="submit"
            disabled={buttonIsDisabled}
          >
            {buttonIsDisabled ? <Spinner size="lg" /> : "Solicitar"}
          </button>
        </div>
      </form>
    </section>
  );
}
