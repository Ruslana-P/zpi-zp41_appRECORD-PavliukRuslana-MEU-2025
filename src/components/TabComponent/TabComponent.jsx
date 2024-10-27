import { Tab, SmallTab } from "./styled";

const TabComponent = ({ onClick, text, small = false, activeItem }) => {
  console.log("activeIndex", activeItem);
  return small ? (
    <SmallTab className={activeItem ? "active_item" : ""} onClick={onClick}>
      {text}
    </SmallTab>
  ) : (
    <Tab className={activeItem ? "active_item" : ""} onClick={onClick}>
      {text}
    </Tab>
  );
};

export default TabComponent;
