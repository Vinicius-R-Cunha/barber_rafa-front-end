import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${variables.DARK_GREY};

  padding: 80px 0;
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 45px;

  @media (max-width: 720px) {
    width: auto;

    flex-direction: column;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat";
  font-size: 0.835rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 48px;

  border-radius: 4px;
  border: 5px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }
`;

export const Category = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 80px;

  @media (max-width: 750px) {
    padding-top: 50px;
  }
`;

export const AdminCategory = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  z-index: 2;

  @media (max-width: 750px) {
    padding-top: 50px;
  }
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 4.375rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${variables.DARK_YELLOW};

  @media (max-width: 1200px) {
    font-size: 2.575rem;
  }

  @media (max-width: 750px) {
    font-size: 2.075rem;
  }

  @media (max-width: 350px) {
    font-size: 1.875rem;
  }
`;

export const AdminCategoryIcons = styled.div`
  font-size: 2rem;
  color: #ffffff;

  display: flex;

  gap: 15px;

  position: absolute;
  right: -150px;

  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 1.575rem;

    right: -130px;
    bottom: 12px;
  }

  @media (max-width: 750px) {
    font-size: 1.275rem;

    gap: 10px;

    right: -90px;
    bottom: 22;
  }

  @media (max-width: 600px) {
    right: 0px;
    bottom: -22px;
  }
`;

export const Services = styled.div`
  width: 1170px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  padding-top: 80px;

  @media (max-width: 1270px) {
    width: 94%;
  }

  @media (max-width: 1023px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 1023px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 750px) {
    padding-top: 42px;

    grid-template-columns: 1fr;
  }
`;

export const Service = styled.div`
  width: 100%;
  height: 230px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${variables.LESS_DARK_GREY};

  position: relative;

  padding-bottom: 70px;

  @media (max-width: 1023px) {
    height: 180px;
  }
`;

export const AdminService = styled.div`
  font-size: 1.3rem;
  color: #ffffff;

  display: flex;
  gap: 10px;

  position: absolute;
  bottom: 15px;
  left: 20px;

  cursor: pointer;

  z-index: 2;
`;

export const NamePrice = styled.div`
  width: 90%;
  height: 100px;

  font-family: "Teko";
  font-size: 1.488rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${variables.WHITE};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 16px;

  p {
    :first-of-type {
      width: 60%;
    }
  }

  @media (max-width: 1023px) {
    height: 70px;

    font-size: 1.088rem;
  }
`;

export const Description = styled.div`
  width: 90%;

  font-family: "Montserrat";
  font-size: 0.725rem;
  font-weight: 400;
  line-height: 1.167em;
  letter-spacing: 0;
  color: ${variables.LIGHT_GREY};

  @media (max-width: 1023px) {
    font-size: 0.725rem;
  }
`;

export const Duration = styled.p`
  width: 90%;

  font-family: "Montserrat";
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: ${variables.LIGHT_GREY};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 10px;

  position: absolute;
  bottom: 15px;

  @media (max-width: 1023px) {
    font-size: 0.675rem;
  }
`;
