import img2 from "../../images/lab2/lab2_17.png";
import img1 from "../../images/lab2/lab2_1.png";

export const getLab2_14_description = () => (
  <>
    <p style={{ textAlign: "justify" }}>
      Я винесла декстопну та планшетну версію в один пункт, оскільки вони схожі
      між собою за елементами які знаходяться на сторінці. Для переходу між
      планшетною та декстопною версією майже не були використані медіа запити, а
      більше засоби гнучкої верстки.
    </p>
    <p>Нижче представлена декстопна версія головної сторінки застосунку</p>
    <img src={img1} alt="main page" />
    <p>Нижче представлена планшетна версія головної сторінки застосунку</p>
    <img src={img2} alt="main page" />
    <p>
      Як видно зі скріншотів планшетна та декстопна версія не містять бургер
      меню, лише звичний navigation bar. Також ці версії містять додаткову
      секцію - таблицю з інформацією про рослини. Контактна форма має інший
      layout, а footer має додатковий список.
    </p>
  </>
);
