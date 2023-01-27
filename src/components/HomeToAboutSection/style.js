import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 112px 0;

  background-color: ${variables.DARK_GREY};
`;

export const AboutContainer = styled.div`
  display: flex;

  gap: 80px;

  @media (max-width: 1270px) {
    width: 90%;
  }

  @media (max-width: 899px) {
    gap: 50px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1270px) {
    width: auto;
  }
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

  @media (max-width: 1270px) {
    font-size: 2.063rem;
  }

  @media (max-width: 767px) {
    font-size: 2.563rem;

    padding-top: 25px;
    padding-bottom: 15px;
  }
`;

export const Description = styled.div`
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75em;
  text-align: justify;
  text-justify: inter-word;
  color: ${variables.LIGHT_GREY};

  @media (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 10px;
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

  margin-top: 50px;

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

    font-size: 0.675rem;
  }
`;

export const ProfileImage = styled.img`
  width: 590px;
  height: 590px;

  object-fit: cover;

  @media (max-width: 1416px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 767px) {
    width: 545px;
    height: 545px;

    padding: 50px 0;
  }

  @media (max-width: 578px) {
    width: 99%;
    height: 370px;

    object-fit: cover;
  }

  @media (max-width: 424px) {
    width: 99%;
    height: 370px;

    object-fit: cover;
  }
`;
