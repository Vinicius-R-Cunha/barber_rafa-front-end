import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  display: none;

  width: 100%;
  height: 90px;

  margin-top: 19px;

  position: relative;

  z-index: 2;

  @media (max-width: 1150px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  height: 110px;

  margin-left: 0;

  object-fit: cover;

  cursor: pointer;

  @media (max-width: 1150px) {
    height: 120px;
  }

  @media (max-width: 450px) {
    height: 100%;
  }
`;

export const Icons = styled.div`
  height: fit-content;

  font-size: 2.0125rem;
  color: ${variables.WHITE};

  display: flex;
  align-items: center;

  margin-top: 10px;
  margin-right: 35px;

  gap: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;

  background-color: ${variables.DARK_GREY};

  position: absolute;
  top: 70px;
  right: 0;

  box-shadow: -2px 5px 15px rgba(0, 0, 0, 0.7);

  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
`;

export const NavButton = styled.div`
  width: 100%;

  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 400;
  color: ${variables.WHITE};

  box-sizing: border-box;
  padding: 19px;
`;
