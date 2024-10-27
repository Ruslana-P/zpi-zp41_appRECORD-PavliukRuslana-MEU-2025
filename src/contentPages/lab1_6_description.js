import pictureImg from "../images/picture.png";
import pictureHtml from "../images/picture_html.png";
import pictureCode1 from "../images/picture_code1.png";
import pictureCode2 from "../images/picture_code2.png";

export const getLab1_6_description = () => (
  <div style={{ maxWidth: "100%" }}>
    <h3>Вигляд зображення на сайті</h3>
    <img
      src={pictureImg}
      alt="plant view"
      style={{ maxWidth: "100%", height: "auto" }}
    />

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд форми в кінцевому HTML-документі</h3>
      <img
        src={pictureHtml}
        alt="html code for img"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд зображення в моєму коді</h3>
      <img
        src={pictureCode1}
        alt="react code for img"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <img
        src={pictureCode2}
        alt="react code for img"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div>
      <h3>Теги та зображення, що були використані для створення зображення:</h3>
      <dl>
        <dt>&lt;img&gt;</dt>
        <dd>
          Використовується для вставки зображень на веб-сторінці.
          <p style={{ marginBottom: "5px" }}>
            <strong>Атрибути:</strong>{" "}
          </p>
          <dt>
            <code>src</code>{" "}
          </dt>
          <dd>
            вказує на шлях до файлу зображення, яке потрібно відобразити. Це
            може бути абсолютний URL або відносний шлях до зображення на
            сервері.
          </dd>
          <dt>
            <code>alt</code>{" "}
          </dt>
          <dd>
            надає текстовий опис зображення. Цей текст відображається, якщо
            зображення не може бути завантажене, і також використовується для
            доступності, допомагаючи користувачам з обмеженими можливостями
            зрозуміти, що зображення містить.
          </dd>
        </dd>
      </dl>
    </div>
  </div>
);
