import img1 from "../../images/lab3/lab3_17.png";
import img2 from "../../images/lab3/lab3_18.png";

export const getLab3_12_description = () => (
  <>
    <h4>Завдання 8</h4>
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
        href="https://github.com/Ruslana-P/web_lab3/blob/main/index_2_8.js"
      >
        тут
      </a>
    </p>
  </>
);
