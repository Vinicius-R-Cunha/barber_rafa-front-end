import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: calc(57 * 7);

  background-color: ${variables.DARK_GREY};
  border-radius: 5px;
  padding: 10px;

  .c1 {
    box-sizing: unset;
    padding: 10px;
    border-radius: 8px;
  }

  @media (max-width: 372px) {
    .c1 {
      width: 318px;
    }
  }

  @media (max-width: 340px) {
    .c1 {
      width: 298px;
    }
  }
`;

export const Week = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.div`
  width: 57px;
  height: 52px;

  font-family: "Teko";
  font-size: 1.3rem;
  color: ${(props) => (props.isWeekend ? variables.WHITE : variables.WHITE)};

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

export const YearMonth = styled.div`
  font-family: "Teko";
  font-size: 1.3rem;
  color: ${variables.WHITE};

  padding: 0 25px;
`;
