import img1 from "../../images/lab4/img1_1.png";
import img2 from "../../images/lab4/img1_2.png";
import img3 from "../../images/lab4/img1_3.png";

export const getLab4_2_description = () => (
  <>
    <h4>Завдання 1</h4>
    <p>
      Нижче представлений скріншот файлу HTML
      <img width="700px" src={img1} alt="function code" />
    </p>
    <p>
      Нижче представлений JavaScript коду
      <img width="700px" src={img2} alt="function code" />
    </p>
    <p>
      Нижче представлений результат виконання коду
      <img width="700px" src={img3} alt="function code" />
    </p>
    <p>
      Перевіти функціональність коду можна за посиланням{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://ruslana-p.github.io/web2/lab4/task1.html"
      >
        тут
      </a>
    </p>
    <p>
      Репозиторій з кодом можна знайти за посиланням тут{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Ruslana-P/web2/tree/main/lab4"
      >
        тут
      </a>
    </p>
  </>
);
