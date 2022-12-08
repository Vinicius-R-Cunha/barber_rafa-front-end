import styled from "styled-components";
import * as variables from "../../styles/variables";
import NumberFormat from "react-number-format";

export const Container = styled.div`
  width: 100%;

  padding: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 23px;

  background-color: ${variables.DARK_GREY};
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 4.075rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${variables.DARK_YELLOW};

  @media (max-width: 768px) {
    font-size: 2.375rem;
  }

  @media (max-width: 400px) {
    font-size: 2.075rem;
  }
`;

export const InputContainer = styled.div`
  width: 40%;
  min-width: 450px;

  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 450px) {
    min-width: auto;
    width: 100%;
  }
`;

export const FieldName = styled.p`
  font-family: "Montserrat";
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-align: center;
  color: ${variables.WHITE};

  background-color: ${variables.DARK_GREY};

  padding: 0 8px;

  position: absolute;
  top: -4.5px;
  left: 20px;
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
  color: #ffffff;

  box-sizing: border-box;
  padding: 0 75px 0 25px;

  border-radius: 4px;
  border: 5px solid #454545;

  ::placeholder {
    color: #ffffff;
  }
`;

export const Action = styled.div`
  font-family: "Montserrat";
  font-size: 0.855rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: #70927b;

  position: absolute;
  right: 18px;

  cursor: pointer;
`;

export const DeleteAccount = styled.p`
  font-family: "Montserrat";
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.7px;
  color: #ff5a5a;

  padding-left: 15px;
  margin-top: 20px;

  cursor: pointer;
`;
