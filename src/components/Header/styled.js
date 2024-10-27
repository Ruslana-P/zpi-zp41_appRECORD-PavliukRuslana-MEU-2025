import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderInfoCnt = styled.div`
  flex-grow: 1;
  text-align: center;

  h1 {
    display: flex;
    flex-direction: column;
    margin: 40px 0 40px 0;
    gap: 15px;

    span:last-child {
      font-style: italic;
    }
  }

  h2 span {
    text-decoration: underline;
  }
`;

export { HeaderContainer, HeaderInfoCnt };
