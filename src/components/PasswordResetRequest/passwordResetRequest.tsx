import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PasswordResetRequestSchema,
  PasswordResetRequestData,
} from "./Schema/passwordResetRequestSchema";

import { toast } from "sonner";

import logo from "../../assets/images/logo.png";

import style from "./passwordResetRequest.module.css";

type ResettingPasswordProps = { advancingPasswordResetProcess: () => void };

export function PasswordResetRequest({
  advancingPasswordResetProcess,
}: ResettingPasswordProps) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetRequestData>({
    resolver: zodResolver(PasswordResetRequestSchema),
  });

  function handlePasswordResetRequest({ drt }: PasswordResetRequestData) {
    console.log(drt);
    toast.success("Event has been created");
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
          >
            Solicitar
          </button>
        </div>
      </form>
    </section>
  );
}
