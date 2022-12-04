import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${variables.DARK_GREY};
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${variables.DARK_YELLOW};

  @media (max-width: 424px) {
    font-size: 1.9rem;
  }
`;

export const InputsForm = styled.form`
  width: 400px;

  display: flex;
  flex-direction: column;

  margin-top: 30px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const PasswordContainer = styled.div`
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

export const Button = styled.button`
  all: unset;

  width: 100%;

  font-family: "Montserrat";
  font-size: 0.835rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  box-sizing: border-box;
  padding: 12px 23px;

  border-radius: 4px;
  border: 5px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 494px) {
    font-size: 0.735rem;
  }

  @media (max-width: 424px) {
    padding: 10px 20px;
  }

  @media (max-width: 370px) {
    font-size: 0.635rem;
    padding: 10px 20px;
  }
`;
