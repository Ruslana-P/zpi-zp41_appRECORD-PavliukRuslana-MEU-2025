import img1 from "../../images/lab5/img5_1.png";
import img2 from "../../images/lab5/img5_2.png";
import img3 from "../../images/lab5/img5_3.png";
import img4 from "../../images/lab5/img5_10.png";
import img5 from "../../images/lab5/img5_11.png";
import img6 from "../../images/lab5/img5_12.png";

export const getLab5_2_description = () => (
  <>
    <h4>Завдання 1</h4>
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
        href="https://ruslana-p.github.io/web2-lab5/"
      >
        тут
      </a>
    </p>
    <p>
      Репозиторій з кодом можна знайти за посиланням тут{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Ruslana-P/web2-lab5"
      >
        тут
      </a>
    </p>
  </>
);
