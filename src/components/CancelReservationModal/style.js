import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Title = styled.p`
  font-family: "Teko";
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${variables.DARK_YELLOW};

  text-align: center;
  @media (max-width: 739px) {
    font-size: 1.8rem;
  }

  @media (max-width: 424px) {
    font-size: 1.5rem;
  }
`;

export const ActionButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 12px;
`;

export const Button = styled.button`
  all: unset;
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

  padding: 12px 58px;

  border-radius: 4px;
  border: 4px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 564px) {
    padding: 12px 10%;
  }
  @media (max-width: 458px) {
    padding: 12px 8%;
  }

  @media (max-width: 408px) {
    font-size: 0.635rem;
  }

  @media (max-width: 340px) {
    padding: 12px 5%;
  }
`;

export const modalStyles = {
  content: {
    maxWidth: "520px",
    padding: "35px",
  },
};
