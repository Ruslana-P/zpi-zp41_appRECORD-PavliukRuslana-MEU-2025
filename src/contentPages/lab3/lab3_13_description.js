import img1 from "../../images/lab3/lab3_19.png";
import img2 from "../../images/lab3/lab3_20.png";

export const getLab3_13_description = () => (
  <>
    <h4>Завдання 9</h4>
    <p>Оскільки я 18 в списку то мої завдання : 2 ,4, 6, 8, 9, 10.</p>
    <p>
      Нижче представлений скріншот коду фунції
      <img width="700px" src={img2} alt="function code" />
    </p>
    <p>
      Нижче представлений результат виконання фунції
      <img width="700px" src={img1} alt="function code" />
    </p>

    <p>
      Посилання документ з кодом можна знайти{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Ruslana-P/web_lab3/blob/main/index_2_9.js"
      >
        тут
      </a>
    </p>
  </>
);
