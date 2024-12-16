import img1 from "../../images/lab2/lab2_9.png";
import img2 from "../../images/lab2/lab2_10.png";
import img3 from "../../images/lab2/lab2_11.png";
import img4 from "../../images/lab2/lab2_12.png";
import img5 from "../../images/lab2/lab2_13.png";
import img6 from "../../images/lab2/lab2_14.png";

export const getLab2_5_description = () => (
  <>
    <p>
      Нижче представлений скріншот сторінки зробленої за допомогою гумової
      блокової верстки. А точніше вигляд для ширини екрану - 1481px
    </p>
    <img src={img1} alt="screenshot" />
    <p>
      Нижче представлений скріншот сторінки зробленої за допомогою гумової
      блокової верстки. А точніше вигляд для ширини екрану - 1077px
    </p>
    <img src={img2} alt="screenshot" />
    <p>
      Нижче представлений скріншот сторінки зробленої за допомогою гумової
      блокової верстки. А точніше вигляд для ширини екрану - 985px
    </p>
    <img src={img3} alt="screenshot" />
    <p>
      Як видно з вище представлених скріншотів, ширина блоків адаптується під
      ширину екрану.
      <br />
      Нижче представлений скріншот тієї самої сторінки, але з додатковими
      тимчасово дованими межами для більш чіткого пресдтавлення розмітки на
      сторінці
    </p>
    <img src={img4} alt="table with borders" />
    <p>Нижче представлений HTML code</p>
    <img width="700px" src={img5} alt="html code" />
    <p>Нижче представлений CSS code</p>
    <img width="700px" src={img6} alt="css code" />
  </>
);
