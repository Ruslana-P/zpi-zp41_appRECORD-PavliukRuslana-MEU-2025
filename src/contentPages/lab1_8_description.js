import link from "../images/link.png";
import linkHtml from "../images/link_html.png";
import linkCode from "../images/link_code.png";

export const getLab1_8_description = () => (
  <div style={{ maxWidth: "100%" }}>
    <h3>Вигляд посилання на сайті</h3>
    <img src={link} alt="link" style={{ maxWidth: "100%", height: "auto" }} />

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд посилання в кінцевому HTML-документі</h3>
      <img
        src={linkHtml}
        alt="link in html"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд посилань в моєму коді</h3>
      <img
        src={linkCode}
        alt="react code for link"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div>
      <h3>Теги та атрибути,що були використані для створення посилання:</h3>
      <dl>
        <dt>
          <dt> &lt;a&gt;</dt>
        </dt>

        <dd>
          Використовується для створення гіперпосилань, які дозволяють
          переходити з однієї веб-сторінки на іншу.
          <p style={{ marginBottom: "5px" }}>
            <strong>Атрибути:</strong>
          </p>
          <dt>
            <code>href</code>
          </dt>
          <dd>
            Вказує на URL-адресу, на яку веде посилання. Це може бути абсолютний
            або відносний шлях до ресурсу.
          </dd>
        </dd>
      </dl>
    </div>
  </div>
);
