import { useState } from "react";

import { ResettingPassword } from "../../components/ResettingPassword/resettingPassword";
import { PasswordResetRequest } from "../../components/PasswordResetRequest/passwordResetRequest";

import style from "./resetPassword.module.css";

export function ResetPassword() {
  const [resetProcess, setResetProcess] = useState(false);

  function advancingPasswordResetProcess() {
    setResetProcess(true);
  }

  return (
    <main className={style.container}>
      {resetProcess ? (
        <ResettingPassword />
      ) : (
        <PasswordResetRequest
          advancingPasswordResetProcess={advancingPasswordResetProcess}
        />
      )}
    </main>
  );
}
