import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Title = styled.p`
  width: 100%;

  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${variables.WHITE};
`;

export const Description = styled.div`
  width: 100%;

  font-family: "Montserrat";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.297em;
  letter-spacing: 0;
  color: ${variables.LIGHT_GREY};

  padding-top: 25px;

  @media (max-width: 424px) {
    font-size: 0.925rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 35px;
`;

export const Price = styled.p`
  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${variables.WHITE};

  @media (max-width: 640px) {
    font-size: 1.388rem;
  }

  @media (max-width: 424px) {
    font-size: 1.188rem;
  }

  @media (max-width: 340px) {
    font-size: 1.188rem;
  }
`;

export const Duration = styled.p`
  font-family: "Montserrat";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.167em;
  letter-spacing: 0;
  color: ${variables.LIGHT_GREY};

  @media (max-width: 640px) {
    font-size: 0.925rem;
  }

  @media (max-width: 424px) {
    font-size: 0.725rem;
  }
`;

export const Button = styled.button`
  all: unset;

  font-family: "Montserrat";
  font-size: 1.275rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  padding: 19px 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 4px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 640px) {
    font-size: 0.925rem;
    padding: 10px 13%;
  }
`;

export const modalStyles = {
  content: {
    maxWidth: "650px",
    padding: "20px 35px",
  },
};
