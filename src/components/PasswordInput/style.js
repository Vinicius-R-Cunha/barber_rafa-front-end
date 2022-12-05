import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;

  position: relative;

  .show-hide {
    font-size: 1.325rem;
    color: ${variables.WHITE};

    position: absolute;
    top: 17px;
    right: 23px;

    cursor: pointer;
  }
`;

export const Input = styled.input`
  all: unset;

  width: 100%;
  height: 55px;

  font-family: "Montserrat";
  font-size: 0.855rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  box-sizing: border-box;
  padding: 0 25px;

  margin-bottom: 13px;

  border-radius: 4px;
  border: 5px solid #454545;

  ::placeholder {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }
`;
