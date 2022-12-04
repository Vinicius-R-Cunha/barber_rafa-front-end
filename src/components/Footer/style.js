import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.footer`
  width: 100%;

  padding: 20px 0 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${variables.DARK_GREY};

  @media (max-width: 768px) {
    padding: 0 0 40px 0;
  }
`;

export const FooterLogo = styled.img`
  width: 150px;

  margin-bottom: 10px;
`;

export const NavButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavButton = styled.div`
  width: 176px;

  font-size: 1.163rem;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 3.076em;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 10px;

  cursor: pointer;

  :hover {
    color: ${variables.DARK_YELLOW};
    transition: 0.1s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 0.963rem;
  }
`;
