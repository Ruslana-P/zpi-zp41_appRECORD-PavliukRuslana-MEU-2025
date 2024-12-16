import img1 from "../../images/lab3/lab3_11.png";
import img2 from "../../images/lab3/lab3_12.png";

export const getLab3_9_description = () => (
  <>
    <h4>Завдання 2</h4>
    <p>
      Нижче представлений скріншот коду фунції
      <img width="700px" src={img1} alt="function code" />
    </p>
    <p>
      Нижче представлений результат виконання фунції
      <img width="700px" src={img2} alt="function code" />
    </p>

    <p>
      Посилання документ з кодом можна знайти{" "}
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/Ruslana-P/web_lab3/blob/main/index_2_2.js"
      >
        тут
      </a>
    </p>
  </>
);
