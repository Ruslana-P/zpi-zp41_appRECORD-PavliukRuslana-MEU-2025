import styled from "styled-components";

export const TabsCnt = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
`;

export const Tab = styled.div`
  padding: 10px 15px;
  border: 2px solid #de75cf;
  border-radius: 30px;

  &.active_tab {
    background-color: #de75cf80;
  }
`;
