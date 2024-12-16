import img1 from "../../images/lab2/lab2_19.png";
import img2 from "../../images/lab2/lab2_20.png";
import img3 from "../../images/lab2/lab2_21.png";
import img4 from "../../images/lab2/lab2_22.png";

export const getLab2_12_description = () => (
  <>
    <p style={{ textAlign: "justify" }}>
      Кожна сторінка в моєму застосунку має адаптивну верстку. Але в цьому звіті
      буде представлений лише розбір головної сторінки мого веб застосунку.
    </p>
    <p>
      У моєму веб застосунку використані наступні breakpoints:
      <ul>
        <li>mobile: 768</li>
        <li>tablet: 768 - 1024</li>
        <li>dekstop: від 1024</li>
      </ul>
    </p>
    <p>В стилях css я використала класичні медіа запити та гнучку верстку.</p>
    <img width="700px" src={img1} alt="main page" />
    <img width="700px" src={img2} alt="main page" />
    <p style={{ textAlign: "justify" }}>
      Також я розробила hook для визначення розміру екрану та відповідного до
      ширинпи екрану девайсу. За допомогою цього hook я імплементувала
      consitional rendering, оскільки деякі layout мають різні елементи
      взалежності від девайсу.
    </p>
    <img width="700px" src={img3} alt="main page" />
    <img width="700px" src={img4} alt="main page" />
  </>
);
