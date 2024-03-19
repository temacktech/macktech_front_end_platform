import logo from "../../assets/images/logo.png";

import style from "./loader.module.css";

export function Loader() {
  return (
    <div className={style.loader}>
      <img src={logo} alt="Logo macktech" />
    </div>
  );
}
