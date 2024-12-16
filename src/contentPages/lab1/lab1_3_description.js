import htmlStructure from "../../images/lab1/html_structure.png";

export const getLab1_3_description = () => (
  <div style={{ overflow: "hidden" }}>
    <img width="100%" src={htmlStructure} alt="HTML structure" />
    <div style={{ overflow: "hidden" }}>
      Документ HTML складається з <code>head</code> та <code>body</code>.<br />
      <code>head</code> містить:
      <ul>
        <li>
          <code>title</code> - встановлює заголовок сторінки, який
          відображається на вкладці браузера
        </li>
        <li>
          <code>title</code> - підключає зовнішній JavaScript-файл для
          функціональності сторінки.
        </li>
        <li>
          <code>link</code> - підключає зовнішній файл CSS для стилів сторінки.
        </li>
        <li>- різні метатеги</li>
      </ul>
      <br />
      <code>body</code> містить:
      <ul>
        <li>header</li>
        <li>main</li>
        <li>footer</li>
      </ul>
      <br />
      <code>main</code> в свою чергу містить кількох секцій, кожна з яких має
      свої компоненти, зазначені в завданні лабораторної 1:
      <ul>
        <li>секцію з таблицею</li>
        <li>секцію з формою</li>
        <li>секцію з упорядкованим і неупорядкованим списками</li>
      </ul>
    </div>
  </div>
);
