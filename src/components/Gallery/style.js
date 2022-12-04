import styled from "styled-components";
import * as variables from "../../styles/variables";
import ScrollContainer from "react-indiana-drag-scroll";

export const Container = styled.div`
  width: 100%;

  background-color: ${variables.DARK_GREY};

  padding-bottom: 70px;

  overflow: hidden;
`;

export const StyledScrollContainer = styled(ScrollContainer)`
  width: 100%;
  height: 100%;

  display: flex;

  cursor: ${(props) => props.cursorStyle};
`;

export const Image = styled.img`
  width: 22%;
  height: 22%;

  flex: 0 0 auto;

  object-fit: cover;

  @media (max-width: 1480px) {
    width: 27%;
    height: 27%;
  }

  @media (max-width: 1023px) {
    width: 39%;
    height: 39%;
  }

  @media (max-width: 620px) {
    width: 100%;
    height: 100%;
  }
`;
