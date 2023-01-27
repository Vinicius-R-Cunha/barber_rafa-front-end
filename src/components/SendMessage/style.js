import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${variables.DARK_GREY};

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const InsideContainer = styled.div`
  width: 79%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 70px 0;
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 4.375rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${variables.WHITE};

  span {
    color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 768px) {
    font-size: 2.375rem;
  }
`;

export const Spacer = styled.div`
  width: 80px;
  height: 2px;

  background-color: ${variables.MEDIUM_GREY};

  margin: 40px 0;
`;

export const Subtitle = styled.p`
  font-family: "Montserrat";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.667em;
  letter-spacing: 0;
  color: ${variables.LIGHT_GREY};
  text-align: center;

  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Button = styled.button`
  width: 260px;
  height: 70px;

  font-family: "Montserrat";
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 5px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  .whats-icon {
    font-size: 1.875rem;

    margin-left: 10px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 50px;

    font-size: 0.775rem;

    .whats-icon {
      font-size: 1.475rem;
    }
  }
`;
