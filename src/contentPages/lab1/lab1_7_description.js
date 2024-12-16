import lists from "../../images/lab1/lists.png";
import orderedListHtml from "../../images/lab1/orderedList_html.png";
import orderedListCode from "../../images/lab1/orderedList_code.png";
import unorderedListCode from "../../images/lab1/unorderedList_code.png";
import unorderedListHtml from "../../images/lab1/unorderedList_html.png";

export const getLab1_7_description = () => (
  <div style={{ maxWidth: "100%" }}>
    <h3>Вигляд списків на сайті</h3>
    <img
      src={lists}
      alt="ordered and unordered lists on web site"
      style={{ maxWidth: "100%", height: "auto" }}
    />

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд неупорядкованих списків в кінцевому HTML-документі</h3>
      <img
        src={unorderedListHtml}
        alt="html code for unordered list"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд упорядкованих списків в кінцевому HTML-документі</h3>
      <img
        src={orderedListHtml}
        alt="html code for ordered list"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд неупорядкованих списків в моєму коді</h3>
      <img
        src={unorderedListCode}
        alt="react code for unordered list"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд неупорядкованих списків в моєму коді</h3>
      <img
        src={orderedListCode}
        alt="react code for ordered list"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div>
      <h3>Теги що були використані для створення списків:</h3>
      <dl>
        <dt>&lt;ul&gt;</dt>
        <dd style={{ textAlign: "justify" }}>
          Використовується для створення неупорядкованих списків, де елементи не
          мають конкретного порядку.
        </dd>

        <dt>&lt;ol&gt;</dt>
        <dd style={{ textAlign: "justify" }}>
          Використовується для створення упорядкованих списків, де елементи
          мають конкретний порядок.
        </dd>

        <dt>&lt;li&gt;</dt>
        <dd style={{ textAlign: "justify" }}>
          Використовується для визначення окремих пунктів у списках (як у
          неупорядкованих, так і в упорядкованих).
        </dd>
      </dl>
    </div>
  </div>
);
