import img1 from "../../images/lab6/img6_1_10.png";
import img2 from "../../images/lab6/img6_1_11.png";
import img3 from "../../images/lab6/img6_1_12.png";
import img4 from "../../images/lab6/img6_1_13.png";
import img5 from "../../images/lab6/img6_1_14.png";
import img6 from "../../images/lab6/img6_1_15.png";

export const getLab6_3_description = () => (
  <>
    <h4>Завдання 2</h4>
    <p>
      Нижче представлений скріншот файлу HTML
      <img width="700px" src={img1} alt="function code" />
    </p>
    <p>
      Нижче представлений файл CSS
      <img width="700px" src={img2} alt="function code" />
    </p>
    <p>
      Нижче представлений скрішот JavaScript коду
      <img width="700px" src={img3} alt="function code" />
    </p>
    <p>
      Нижче представлений скріншоти виконання коду
      <img width="700px" src={img4} alt="function code" />
      <img width="700px" src={img5} alt="function code" />
      <img width="700px" src={img6} alt="function code" />
    </p>
    <p>
      Перевіти функціональність коду можна за посиланням{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://ruslana-p.github.io/web2-lab6/2-snackbar.html"
      >
        тут
      </a>
    </p>
    <p>
      Репозиторій з кодом можна знайти за посиланням тут{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Ruslana-P/web2-lab6/tree/main"
      >
        тут
      </a>
    </p>
  </>
);
