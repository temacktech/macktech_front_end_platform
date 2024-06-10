import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Button,
  Progress,
} from "@chakra-ui/react";

import { CaretDown } from "phosphor-react";

import style from "./header.module.css";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { user, logout } = useContext(AuthContext);

  const { name, surname, level, experience } = user?.user!;

  const upperCaseName = name[0].toUpperCase() + name.slice(1);
  const upperCaseSurname = surname[0].toUpperCase() + surname.slice(1);
  const formattedUsername = `${upperCaseName} ${upperCaseSurname}`;

  const roleData = user?.role!;

  const upperCaseNameRole =
    roleData.name[0].toUpperCase() + roleData.name.slice(1);

  function handleLogout() {
    logout();
  }

  return (
    <header className={style.header}>
      <h1>/{title}</h1>
      <div className={style.profileLevel}>
        <div className={style.level}>
          <h2>{level}</h2>
        </div>
        <div className={style.progress}>
          <h2>Level {level}</h2>
          <Progress colorScheme="blue" size="md" value={experience} />
        </div>
      </div>
      <div className={style.profileOptions}>
        <Menu>
          <MenuButton
            as={Button}
            size="xl"
            bgColor="transparent"
            rightIcon={<CaretDown size={15} />}
          >
            <div className={style.wrapper}>
              <Avatar size="lg" name={formattedUsername} />
              <div className={style.profile}>
                <h1>{formattedUsername}</h1>
                <h2>{upperCaseNameRole}</h2>
              </div>
            </div>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
}
