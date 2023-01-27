import styled from "styled-components";
import * as variables from "../../../styles/variables";

export const About = styled.p`
  font-family: "Teko";
  font-size: 5.625rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 2.2px;
  text-align: center;
  text-transform: uppercase;
  color: ${variables.WHITE};

  margin-top: ${(props) => (props.page === "home" ? "200px" : "95px")};

  margin-bottom: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  span {
    color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 1100px) {
    font-size: 4.375rem;

    margin-top: ${(props) => (props.page === "home" ? "85px" : "45px")};

    margin-bottom: 50px;
  }

  @media (max-width: 767px) {
    font-size: 3.225rem;

    margin-top: ${(props) => (props.page === "home" ? "75px" : "20px")};
  }

  @media (max-width: 500px) {
    font-size: 2.7rem;

    margin-top: ${(props) => (props.page === "home" ? "78px" : "20px")};
  }

  @media (max-width: 500px) {
    font-size: 2.7rem;

    margin-top: ${(props) => (props.page === "home" ? "78px" : "20px")};
  }

  @media (max-width: 426px) {
    margin-top: ${(props) => (props.page === "home" ? "50px" : "20px")};
  }
`;

export const BookButton = styled.button`
  width: 280px;
  height: 73px;

  font-weight: 800;
  font-size: 0.875rem;
  line-height: 1em;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 5px solid ${variables.DARK_YELLOW};

  z-index: 1;

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 1100px) {
    width: 260px;
    height: 53px;

    border: 3px solid ${variables.DARK_YELLOW};
  }

  @media (max-width: 767px) {
    width: 245px;
    height: 50px;
  }

  @media (max-width: 500px) {
    width: 205px;
    height: 40px;

    font-size: 0.675rem;
  }
`;
