import { useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import RaportContent from "./components/RaportContent/RaportContent";
import { RaportBodyCnt } from "./styled";
import LabsTabs from "./components/LabsTabs/LabsTabs";
import { lab1Content } from "./utils/lab1Content";
import { lab2Content } from "./utils/lab2Content";
import { lab3Content } from "./utils/lab3Content";
import { lab4Content } from "./utils/lab4Content";

const LabsContent = {
  1: lab1Content,
  2: lab2Content,
  3: lab3Content,
  4: lab4Content,
};

function App() {
  const [activeTabIndex, setTabIndex] = useState(1);
  const [activeSideBarMenuIndex, setSideBarMenuIndex] = useState(0);

  const tabClickHandler = (index) => {
    setTabIndex(index);
  };

  const sidebarMenuClickHandler = (index) => {
    setSideBarMenuIndex(index);
  };

  return (
    <>
      <Header />
      <RaportBodyCnt>
        <LabsTabs activeIndex={activeTabIndex} clickHandler={tabClickHandler} />
        <RaportContent
          activeIndex={activeSideBarMenuIndex}
          clickHandler={sidebarMenuClickHandler}
          labData={LabsContent[activeTabIndex]}
        />
      </RaportBodyCnt>
    </>
  );
}

export default App;
