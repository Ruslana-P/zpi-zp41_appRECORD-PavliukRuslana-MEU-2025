import img1 from "../../images/lab2/lab2_18.png";
import img2 from "../../images/lab2/lab2_23.png";
import img3 from "../../images/lab2/lab2_24.png";
import img4 from "../../images/lab2/lab2_25.png";
import img5 from "../../images/lab2/lab2_26.png";

export const getLab2_13_description = () => (
  <>
    <p>Нижче представлена мобільна версія головної сторінки застосунку</p>
    <img width="700px" src={img1} alt="main page" />
    <p style={{ alignItems: "justify" }}>
      HTML code для мобільної має менше елементів ніж для декстопної, оскільки
      мобільна версія містить лише найважливіший контент. Це зроблено для
      зручності юзера та оптимізації швидкості підгрузки сторінки.
    </p>
    <p style={{ alignItems: "justify" }}>
      Header має окремо написані стилі для мобільної версії. Оскільки в
      мобільній версії навігація не відтворюється відразу а прихована в
      burger-menu і зявляється лише коли юзер на нього натисне.
    </p>
    <img width="700px" src={img2} alt="main page" />
    <img width="700px" src={img3} alt="main page" />
    <p style={{ alignItems: "justify" }}>
      Для контактної форми в мобільній версії використаниий flex with column
      direction
    </p>
    <img width="700px" src={img4} alt="main page" />
    <p style={{ alignItems: "justify" }}>
      А footer має лише список адрес (декстоп версія також має певні додаткові
      елементи)
    </p>
    <img width="700px" src={img5} alt="main page" />
  </>
);
