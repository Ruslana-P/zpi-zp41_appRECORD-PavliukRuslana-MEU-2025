import tableImg from "../images/table.png";
import tableHtml from "../images/table_html.png";
import tableCode from "../images/table_code.png";

export const getLab1_4_description = () => (
  <div style={{ maxWidth: "100%" }}>
    <h3>Вигляд таблиці на сайті</h3>
    <img
      src={tableImg}
      alt="table on web site"
      style={{ maxWidth: "100%", height: "auto" }}
    />

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд таблиці в кінцевому HTML-документі</h3>
      <img
        src={tableHtml}
        alt="table in html code"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд таблиці в моєму коді</h3>
      <img
        src={tableCode}
        alt="table in react code"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div>
      <h3>Теги, що були використані для створення таблиці:</h3>
      <dl>
        <dt>&lt;table&gt;</dt>
        <dd>
          Основний контейнер таблиці. У ньому міститься вся структура таблиці,
          включаючи заголовки, рядки, стовпці тощо.
        </dd>

        <dt>&lt;thead&gt;</dt>
        <dd>
          Блок для заголовків стовпців таблиці. Він містить рядок або кілька
          рядків, які визначають заголовки кожного стовпця.
        </dd>

        <dt>&lt;tr&gt;</dt>
        <dd>
          Кожен рядок таблиці. <code>&lt;tr&gt;</code> (table row) може
          знаходитися як у <code>&lt;thead&gt;</code>, так і в{" "}
          <code>&lt;tbody&gt;</code>, позначаючи рядок заголовків або рядок з
          даними відповідно.
        </dd>

        <dt>&lt;th&gt;</dt>
        <dd>
          Елемент заголовку стовпця, що використовується всередині{" "}
          <code>&lt;tr&gt;</code> у <code>&lt;thead&gt;</code>. За замовчуванням{" "}
          <code>&lt;th&gt;</code> текст відображається жирним шрифтом і
          вирівнюється по центру.
        </dd>

        <dt>&lt;tbody&gt;</dt>
        <dd>
          Блок для основного контенту таблиці. Містить рядки даних таблиці.
        </dd>

        <dt>&lt;td&gt;</dt>
        <dd>
          Елемент комірки даних (table data), що використовується всередині{" "}
          <code>&lt;tr&gt;</code> у <code>&lt;tbody&gt;</code>. Кожен{" "}
          <code>&lt;td&gt;</code> містить окрему комірку даних
        </dd>
      </dl>
    </div>
  </div>
);
