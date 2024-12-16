import img1 from "../../images/lab2/lab2_4.png";
import img2 from "../../images/lab2/lab2_5.png";
import img3 from "../../images/lab2/lab2_6.png";
import img4 from "../../images/lab2/lab2_7.png";
import img5 from "../../images/lab2/lab2_8.png";

export const getLab2_4_description = () => {
  console.log("dhdkjhskhdlk");
  return (
    <>
      <p>
        Нижче представлений скріншот сторінки зробленої за допомогою гумової
        табличної верстки{" "}
      </p>
      <img src={img2} alt="table" />
      <p>
        Нижче представлений скріншот тієї самої сторінки, але з додатковими
        тимчасово дованими межами для більш чіткого пресдтавлення розмітки на
        сторінці
      </p>
      <img src={img1} alt="table with borders" />
      <p>Нижче представлений HTML code</p>
      <img src={img3} alt="html code" />
      <p>Нижче представлений CSS code</p>
      <img width="800px" src={img4} alt="css code" />
      <img width="800px" src={img5} alt="css code" />
    </>
  );
};
