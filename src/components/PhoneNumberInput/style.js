import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Input = styled.input`
  all: unset;

  width: 100%;
  height: 55px;

  font-family: "Montserrat";
  font-size: 0.855rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: #ffffff;

  box-sizing: border-box;
  padding: 0 75px 0 25px;

  border-radius: 4px;
  border: 5px solid ${variables.MEDIUM_GREY};

  ::placeholder {
    color: #ffffff;
  }
`;
