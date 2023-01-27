import styled from "styled-components";
import * as variables from "../../styles/variables";
const TILE_WIDTH = 57;
const TILE_HEIGHT = 50;

export const Container = styled.div`
  width: calc(${TILE_WIDTH}px * 7);

  background-color: ${variables.DARK_GREY};
  border-radius: 5px;
  padding: 10px;

  @media (max-width: 488px) {
    width: 350px;
  }

  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 362px) {
    width: 120%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  width: ${TILE_WIDTH}px;
  height: ${TILE_HEIGHT}px;

  font-family: "Teko";
  font-size: 1.7rem;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.isDisabled ? "0.35" : "1")};

  box-sizing: border-box;

  cursor: pointer;
`;

export const YearMonth = styled.div`
  font-family: "Teko";
  font-size: 1.7rem;
  color: ${variables.WHITE};

  padding: 0 25px;

  cursor: default;
`;

export const Weekday = styled.div`
  width: ${TILE_WIDTH}px;
  height: calc(${TILE_HEIGHT}px - 8px);

  font-family: "Teko";
  font-size: 1.3rem;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;

  box-sizing: border-box;
  padding-top: 13px;

  border-bottom: 1px solid ${variables.WHITE};
  border-bottom-style: solid;

  cursor: default;
`;

export const Day = styled.div`
  width: ${TILE_WIDTH}px;
  height: ${TILE_HEIGHT}px;

  font-family: "Teko";
  font-size: 1.3rem;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  opacity: ${(props) => (props.isNotFromThisMonth ? "0.35" : "1")};

  background-color: ${({ isToday, isSelected }) =>
    isSelected
      ? variables.DARK_YELLOW
      : isToday
      ? variables.LIGHT_BLUE
      : variables.DARK_GREY};

  cursor: ${(props) => (props.tileDisabled ? "default" : "pointer")};

  ${(props) =>
    props.tileDisabled
      ? "opacity: 0.35;"
      : `:hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }`}
`;
