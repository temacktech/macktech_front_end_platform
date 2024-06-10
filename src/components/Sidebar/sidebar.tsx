import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import {
  House,
  Signpost,
  Storefront,
  Gear,
  List,
  X
} from "phosphor-react";

import style from "./sidebar.module.css";

interface SidebarProps {
  title: string;
}

export function Sidebar({ title }: SidebarProps) {
  const [openSidebar, setOpenSidebar] = useState(false);

  function handleActiveSidebar() {
    setOpenSidebar(!openSidebar);
  }

  const sizeIcons = 32;

  const listItems = [
    {
      id: 1,
      name: "Inicio",
      icon: <House size={sizeIcons} />,
      path: "/home",
    },
    {
      id: 2,
      name: "Trilhas",
      icon: <Signpost size={sizeIcons} />,
      path: "/trails",
    },
    {
      id: 3,
      name: "Loja",
      icon: <Storefront size={sizeIcons} />,
      path: "/store",
    },
    {
      id: 4,
      name: "Configurações",
      icon: <Gear size={sizeIcons} />,
      path: "/settings",
    },
  ];

  return (
    <aside
      className={`${style.sidebar} ${openSidebar ? style.openSidebar : ""}`}
    >
      <header className={style.header}>
        <img
          className={`${openSidebar ? style.logo : ""}`}
          src={logo}
          alt="Selo Macktech"
        />
        <div className={style.burguerMenu} onClick={handleActiveSidebar}>
          {openSidebar ? <X size={40} /> : <List size={40} />}
        </div>
      </header>
      <ul>
        {listItems.map(({ id, name, icon, path }) => (
          <li className={`${title === name ? style.active : ""}`} key={id}>
            <Link to={path}>
              {icon}
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
