import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 112px 0;

  background-color: ${variables.DARK_GREY};

  position: relative;

  @media (max-width: 767px) {
    padding: 50px 0;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  opacity: 0.6;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
`;

export const BackgroundDarkness = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 4.375rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  color: ${variables.WHITE};

  padding-bottom: 25px;

  z-index: 1;

  @media (max-width: 767px) {
    font-size: 3.563rem;

    padding-top: 25px;
    padding-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 2.463rem;
  }
`;

export const Button = styled.button`
  width: 280px;
  height: 73px;

  font-weight: 800;
  font-size: 0.875rem;
  line-height: 1em;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  margin-top: 30px;

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

    margin-top: 40px;
  }

  @media (max-width: 500px) {
    width: 205px;
    height: 40px;

    margin-top: 10px;
    font-size: 0.675rem;
  }
`;
