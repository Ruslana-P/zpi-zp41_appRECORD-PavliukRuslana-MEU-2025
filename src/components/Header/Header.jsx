import React from "react";
import { HeaderContainer, HeaderInfoCnt } from "./styled";
import avatar from "../../images/5983417634567342137.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInfoCnt>
        <h1>
          <span>Звіт лабораторних робіт з дисципліни</span>{" "}
          <span>"Проєктування Web-застосувань"</span>
        </h1>
        <h2>
          Студент групи <span>ЗПІ-зп41</span> Павлюк Руслана Володимирівна
        </h2>
      </HeaderInfoCnt>
      <div>
        <img width="150px" src={avatar} alt="student avatar" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
