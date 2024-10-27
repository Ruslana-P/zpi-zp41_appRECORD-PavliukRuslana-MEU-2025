import styled from "styled-components";

const Tab = styled.div`
  border: solid 1px #8d4ab7;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 10px 5px;
  text-align: center;

  &.active_item {
    background-color: #b786d5;
  }
`;

const SmallTab = styled.div`
  border: solid 1px blue;
  border-radius: 30px;
  margin: 0 0 20px 45px;
  padding: 5px;
  text-align: center;

  &.active_item {
    background-color: #b786d5;
  }
`;

export { Tab, SmallTab };
