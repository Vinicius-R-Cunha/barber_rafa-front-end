import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.header`
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
