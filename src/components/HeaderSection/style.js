import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.page === "home" ? "960px" : "537px")};

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(0, 0, 0, 1);
  position: relative;

  z-index: 1;

  @media (max-width: 1100px) {
    height: ${(props) => (props.page === "home" ? "570px" : "302px")};
  }

  @media (max-width: 767px) {
    height: ${(props) => (props.page === "home" ? "500px" : "220px")};
  }

  @media (max-width: 500px) {
    height: ${(props) => (props.page === "home" ? "430px" : "220px")};
  }

  @media (max-width: 426px) {
    height: ${(props) => (props.page === "home" ? "400px" : "220px")};
  }

  @media (max-width: 418px) {
    height: ${(props) => (props.page === "home" ? "450px" : "220px")};
  }

  @media (max-width: 337px) {
    height: ${(props) => (props.page === "home" ? "480px" : "220px")};
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

  z-index: -3;
`;

export const BackgroundDarkness = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 0;
`;

export const HeaderDiv = styled.div`
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

  background-color: #252525;

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
  color: #e1e1e1;

  display: flex;
  justify-content: flex-end;

  box-sizing: border-box;
  padding: 19px;

  cursor: pointer;

  :hover {
    color: #96885f;
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

export const NavButton = styled.div`
  font-size: 1.163rem;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 1.176em;
  color: #e1e1e1;

  display: flex;
  align-items: center;

  margin: 0 30px;

  cursor: pointer;

  :hover {
    color: #96885f;
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

export const About = styled.div`
  font-family: "Teko";
  font-size: 5.625rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 2.2px;
  text-align: center;
  text-transform: uppercase;
  color: #e1e1e1;

  margin-top: ${(props) => (props.page === "home" ? "200px" : "95px")};

  margin-bottom: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  span {
    color: #96885f;
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
  all: unset;

  width: 280px;
  height: 73px;

  font-weight: 800;
  font-size: 0.875rem;
  line-height: 1em;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  color: #e1e1e1;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 5px solid #96885f;

  z-index: 1;

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: #96885f;
  }

  @media (max-width: 1100px) {
    width: 260px;
    height: 53px;

    border: 3px solid #96885f;
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
