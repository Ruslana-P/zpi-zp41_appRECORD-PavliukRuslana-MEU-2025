import img1 from "../../images/lab1/lab1a_4.png";
import img2 from "../../images/lab1/lab1a_5.png";
import img3 from "../../images/lab1/lab1a_8.png";

export const lab1a_3_description = () => (
  <>
    <p>
      Нижче представлений приклад застосування селектору тегу в моєму застосунку
    </p>
    <p>HTML code</p>
    <img src={img3} alt="code example" width="600px" />
    <p>CSS code</p>
    <img src={img1} alt="code example" width="600px" />
    <p>
      Нижче представлений вигляд списків до яких застосовані представлені вище
      стилі
    </p>
    <img src={img2} alt="code example" width="600px" />
  </>
);
