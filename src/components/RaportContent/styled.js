import styled from "styled-components";

const ContentCnt = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 25px;
  margin-top: 40px;
`;

const SideBarCnt = styled.div`
  width: 30%;
  flex-wrap: no-wrap;
  justify-content: space-between;
`;

const Description = styled.div`
  width: 30%;
  flex-wrap: no-wrap;
  justify-content: space-between;
  flex-grow: 1;
`;

export { SideBarCnt, ContentCnt, Description };
