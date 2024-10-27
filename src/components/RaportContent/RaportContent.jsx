import { SideBarCnt, ContentCnt, Description } from "./styled";
import TabComponent from "../TabComponent/TabComponent";

const RaportContent = ({ labData, clickHandler, activeIndex }) => {
  return (
    <ContentCnt>
      <SideBarCnt>
        {labData &&
          labData.map(({ id, text, small }) => (
            <TabComponent
              activeItem={activeIndex === id}
              key={id}
              onClick={clickHandler.bind(null, id)}
              text={text}
              small={small}
            />
          ))}
      </SideBarCnt>
      <Description>
        {labData[activeIndex]?.description
          ? labData[activeIndex].description()
          : "No information yet"}
      </Description>
    </ContentCnt>
  );
};

export default RaportContent;
