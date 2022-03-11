import styled from "styled-components";

import bgImage from "../../images/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 0 280px;
  max-width: 50px 1000px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
