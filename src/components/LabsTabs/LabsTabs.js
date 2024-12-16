import { labsNames } from "../../utils/lab1Content";
import { TabsCnt, Tab } from "./styled";

const LabsTabs = ({ activeIndex, clickHandler }) => {
  console.log("activeIndex", activeIndex);
  return (
    <TabsCnt>
      {labsNames.map((item) => (
        <Tab
          onClick={() => clickHandler(item.id)}
          key={"lab-tab-" + item.id}
          className={item.id === activeIndex ? "active_tab" : ""}
        >
          {item.text}
        </Tab>
      ))}
    </TabsCnt>
  );
};

export default LabsTabs;
