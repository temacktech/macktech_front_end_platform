import { CellSignalLow } from "phosphor-react";

import style from "./card.module.css";
import { useNavigate } from "react-router-dom";

export function Card() {
  const navigate = useNavigate();

  return (
    <div data-aos="zoom-in" className={style.card}>
      <img src="https://mackenzie365.sharepoint.com/sites/1159770_TecnologiaEducacionaleInovao/Documentos%20Compartilhados/Tutoriais%20Youtube/Imers%C3%A3o/pensamento%20computacional.png" />
      <div className={style.informations}>
        <h1>Pensamento Computacional</h1>
        <h2>Explore conceitos fundamentais de resolução de problemas e lógica.</h2>
        <h3>Duração 6h</h3>
        <p>
          <CellSignalLow size={20} weight="fill" />
          Iniciante
        </p>
      </div>
      <button
        type="button"
        onClick={() => navigate("/study")}
      >
        Acessar
      </button>
    </div>
  );
}
