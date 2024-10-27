import formImg from "../images/form.png";
import formHtml from "../images/form_html.png";
import formCode from "../images/form_code.png";

export const getLab1_5_description = () => (
  <div style={{ maxWidth: "100%" }}>
    <h3>Вигляд форми на сайті</h3>
    <img
      src={formImg}
      alt="form on web site"
      style={{ maxWidth: "100%", height: "auto" }}
    />

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд форми в кінцевому HTML-документі</h3>
      <img
        src={formHtml}
        alt="form in html code"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div style={{ maxWidth: "100%" }}>
      <h3>Вигляд форми в моєму коді</h3>
      <img
        src={formCode}
        alt="form in react code"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    <div>
      <h3>Теги та атрибути, що були використані для створення форми:</h3>
      <dl>
        <dt>&lt;form&gt;</dt>
        <dd>
          Використовується для створення форми для введення та відправки даних.
          <p style={{ marginBottom: "5px" }}>
            <strong>Атрибути:</strong>
          </p>
          <dt>
            <code>onSubmit="handleSubmit"</code>
          </dt>
          <dd>
            визначає обробник події, який викликається при відправці форми
          </dd>
        </dd>

        <dt>&lt;label&gt;</dt>
        <dd>
          Пов'язує текстову мітку з полем введення, що полегшує доступність і
          допомагає користувачам зрозуміти, яке значення очікується в
          конкретному полі.
          <p style={{ marginBottom: "5px" }}>
            <strong>Атрибути:</strong>
          </p>
          <dt>
            <code>for</code>
          </dt>
          <dd>
            Призначає &lt;label&gt; до конкретного елемента форми, поєднуючи
            текстову мітку з полем введення. Значення for повинно відповідати
            значенню атрибуту id пов’язаного елемента
          </dd>
        </dd>

        <dt>&lt;input&gt;</dt>
        <dd>
          Елемент для створення різних полів введення.
          <dl>
            <p style={{ marginBottom: "5px" }}>
              <strong>Атрибути:</strong>{" "}
            </p>
            <dt>
              <code>type="text"</code>
            </dt>
            <dd>
              Визначає тип поля вводу як текстове (використовується для імені).
            </dd>

            <dt>
              <code>type="tel"</code>
            </dt>
            <dd>Визначає поле для введення телефонного номера.</dd>

            <dt>
              <code>type="email"</code>
            </dt>
            <dd>
              Визначає поле для введення електронної пошти. Браузер може
              перевіряти правильність введення email-адреси.
            </dd>

            <dt>
              <code>name</code>
            </dt>
            <dd>
              Встановлює ім’я для кожного поля вводу, яке використовується для
              доступу до значення у коді (напр. <code>name="name"</code>,{" "}
              <code>name="phone"</code>, <code>name="email"</code>).
            </dd>

            <dt>
              <code>value</code>
            </dt>
            <dd>
              Задає значення, яке відображатиметься в полі, беручи його зі стану{" "}
              <code>formData</code>.
            </dd>

            <dt>
              <code>onChange</code>
            </dt>
            <dd>
              Обробляє подію зміни значення в полі вводу, оновлюючи значення у
              стані.
            </dd>

            <dt>
              <code>placeholder</code>
            </dt>
            <dd>
              Показує текст-заповнювач, що підказує користувачеві, яке значення
              слід ввести (напр. <code>placeholder="Enter your name"</code>).
            </dd>

            <dt>
              <code>required</code>
            </dt>
            <dd>
              Робить поле обов’язковим для заповнення перед відправкою форми.
            </dd>
          </dl>
        </dd>

        <dt>&lt;textarea&gt;</dt>
        <dd>
          Створює текстову область для введення довших текстових даних.
          <dl>
            <p style={{ marginBottom: "5px" }}>
              <strong>Атрибути:</strong>{" "}
            </p>
            <dt>
              <code>name</code>
            </dt>
            <dd>
              Вказує ім’я для текстової області, що допомагає при обробці даних.
            </dd>

            <dt>
              <code>value</code>
            </dt>
            <dd>Показує значення текстової області з даних форми.</dd>

            <dt>
              <code>onChange</code>
            </dt>
            <dd>Обробляє зміну введеного значення, оновлюючи стан.</dd>

            <dt>
              <code>placeholder</code>
            </dt>
            <dd>Відображає підказку для введення питання.</dd>

            <dt>
              <code>required</code>
            </dt>
            <dd>Робить текстову область обов'язковою для заповнення.</dd>
          </dl>
        </dd>

        <dt>&lt;button&gt;</dt>
        <dd>
          <p style={{ marginBottom: "5px" }}>
            <strong>Атрибути:</strong>{" "}
          </p>
          Створює кнопку для взаємодії з користувачем.
          <dl>
            <dt>
              <code>type="submit"</code>
            </dt>
            <dd>
              Визначає, що кнопка повинна відправити форму при натисканні.
            </dd>
          </dl>
        </dd>
      </dl>
    </div>
  </div>
);
