import img1 from "../../images/lab1/lab1a_1.png";
import img2 from "../../images/lab1/lab1a_2.png";
import img3 from "../../images/lab1/lab1a_3.png";

export const lab1a_1_description = () => (
  <div>
    <p> Існує три основні способи підключення CSS-стилів до HTML-документів:</p>
    <p style={{ textAlign: "justify" }}>
      <h5>Вбудовані стилі (Inline CSS)</h5>
      Стилі додаються безпосередньо до HTML-елементів за допомогою атрибуту
      style. Цей метод застосовується, коли потрібно оформити окремий елемент.
    </p>
    <p style={{ textAlign: "justify" }}>
      Такий спосіб не був використаний в моєму застосунку, тому приклад
      теоретичний:
    </p>
    <img src={img1} alt="code example" width="600px" />

    <p style={{ textAlign: "justify" }}>
      <h5>Внутрішні стилі (Internal CSS)</h5>
      Стилі записуються у межах самого HTML-документа у блоці &lt;style&gt;,
      який розташовується у секції &lt;head&gt;. Цей метод використовується для
      оформлення сторінки або блоку, який не буде використовуватися в інших
      сторінках.
    </p>
    <p style={{ textAlign: "justify" }}>
      Такий спосіб не був використаний в моєму застосунку, тому приклад
      теоретичний:
    </p>
    <img src={img2} alt="code example" width="600px" />

    <p style={{ textAlign: "justify" }}>
      <h5>Зовнішні стилі (External CSS)</h5>
      Зовнішній CSS-файл підключається до HTML-документа через тег &lt;link&gt;,
      розташований у секції &lt;head&gt;. Це найпоширеніший метод, який дозволяє
      використовувати стилі на кількох сторінках сайту.
    </p>
    <p>Цей спосіб використаний в моєму застосунку.</p>
    <img src={img3} alt="code example" width="600px" />
  </div>
);
