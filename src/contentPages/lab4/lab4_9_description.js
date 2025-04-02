import img1 from "../../images/lab4/img9_1.png";
import img2 from "../../images/lab4/img9_2.png";
import img3 from "../../images/lab4/img9_3.png";
import img4 from "../../images/lab4/img9_4.png";
import img5 from "../../images/lab4/img9_5.png";

export const getLab4_9_description = () => (
  <>
    <h4>Завдання 9</h4>
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
      <img width="700px" src={img4} alt="function code" />
      <img width="700px" src={img5} alt="function code" />
    </p>
    <p>
      Перевіти функціональність коду можна за посиланням{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://ruslana-p.github.io/web2/lab4/task9.html"
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
