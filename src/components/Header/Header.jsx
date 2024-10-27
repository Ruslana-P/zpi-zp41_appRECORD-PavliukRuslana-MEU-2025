import React from "react";
import { HeaderContainer, HeaderInfoCnt } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInfoCnt>
        <h1>
          <span>Звіт лаборатоних робіт з дисципліни</span>{" "}
          <span>"Проєктування Web-застосувань"</span>
        </h1>
        <h2>
          Студент групи <span>ЗПІ-зп41</span> Павлюк Руслана Володимирівна
        </h2>
      </HeaderInfoCnt>
      <div>
        <img src="" alt="student avatar" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
