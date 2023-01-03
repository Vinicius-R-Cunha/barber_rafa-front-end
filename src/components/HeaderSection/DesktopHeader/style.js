import styled from "styled-components";
import * as variables from "../../../styles/variables";

export const Container = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 23px;

  position: relative;

  z-index: 1;

  @media (max-width: 1300px) {
    width: 95%;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  width: 160px;

  background-color: ${variables.DARK_GREY};

  position: absolute;
  top: 110px;
  right: 0;

  border-radius: 4px;
  box-shadow: -2px 5px 15px rgba(0, 0, 0, 0.7);

  z-index: 3;

  cursor: pointer;

  @media (max-width: 1150px) {
    display: none;
  }
`;

export const ProfileButton = styled.div`
  width: 100%;

  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 400;
  color: ${variables.WHITE};

  display: flex;
  justify-content: flex-end;

  box-sizing: border-box;
  padding: 19px;

  cursor: pointer;

  :hover {
    color: ${variables.DARK_YELLOW};
    transition: 0.1s ease-in-out;
  }
`;

export const LogoImage = styled.img`
  height: 170px;

  cursor: pointer;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButton = styled.button`
  all: unset;

  font-size: 1.163rem;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 1.176em;
  color: ${variables.WHITE};

  display: flex;
  align-items: center;

  margin: 0 30px;

  cursor: pointer;

  :hover {
    color: ${variables.DARK_YELLOW};
    transition: 0.1s ease-in-out;
  }

  :last-of-type {
    margin-right: 0;
  }

  .login-icon {
    font-size: 2.3125rem;

    margin-right: -20px;
    margin-bottom: 2px;

    cursor: pointer;
  }

  p {
    margin-left: 30px;
  }
`;
