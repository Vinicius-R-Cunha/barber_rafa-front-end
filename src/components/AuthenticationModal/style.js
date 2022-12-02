import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  .close-button {
    font-size: 2.4rem;
    color: #e1e1e1;

    position: absolute;
    top: 7px;
    right: 8px;

    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #96885f;

  @media (max-width: 424px) {
    font-size: 1.9rem;
  }
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-size: 0.855rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.7px;
  text-align: center;
  color: #e1e1e1;

  margin-top: 15px;
`;

export const InputsForm = styled.form`
  width: 100%;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    all: unset;

    width: 100%;
    height: 55px;

    font-family: "Montserrat";
    font-size: 0.855rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.7px;
    color: #e1e1e1;

    box-sizing: border-box;
    padding: 0 25px;

    margin-bottom: 13px;

    border-radius: 4px;
    border: 5px solid #454545;

    ::placeholder {
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  span {
    width: 100%;
  }

  @media (max-width: 739px) {
    width: 400px;
  }

  @media (max-width: 494px) {
    width: 360px;

    margin-top: 15px;
  }

  @media (max-width: 424px) {
    width: 310px;

    input {
      font-size: 0.755rem;
    }
  }

  @media (max-width: 370px) {
    width: 265px;
  }
`;

export const PasswordContainer = styled.div`
  width: 100%;

  position: relative;

  .show-hide {
    font-size: 1.325rem;
    color: #e1e1e1;

    position: absolute;
    top: 17px;
    right: 23px;

    cursor: pointer;
  }
`;

export const LinkButtonDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 12px;

  position: relative;
`;

export const NavigationText = styled.div`
  font-family: "Montserrat";
  font-size: 0.905rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: #96885f;

  margin-top: 22px;

  cursor: pointer;

  :hover {
    color: #e1e1e1;
  }

  @media (max-width: 424px) {
    font-size: 0.855rem;

    margin-top: 18px;
  }

  @media (max-width: 370px) {
    font-size: 0.695rem;
  }
`;

export const ForgotPassword = styled.p`
  font-family: "Montserrat";
  font-size: 0.82rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: #96885f;

  position: absolute;
  top: -18px;

  cursor: pointer;

  :hover {
    color: #e1e1e1;
  }

  @media (max-width: 424px) {
    font-size: 0.77rem;
  }

  @media (max-width: 370px) {
    font-size: 0.62rem;
  }
`;

export const Button = styled.button`
  all: unset;

  font-family: "Montserrat";
  font-size: 0.835rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #e1e1e1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 23px;

  border-radius: 4px;
  border: 5px solid #96885f;

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: #96885f;
  }

  @media (max-width: 494px) {
    font-size: 0.735rem;
  }

  @media (max-width: 424px) {
    padding: 10px 20px;
  }

  @media (max-width: 370px) {
    font-size: 0.635rem;
    padding: 10px 20px;
  }
`;

export const Spacer = styled.div`
  width: 99%;

  font-family: "Montserrat";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15px;
  color: #e1e1e1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;

  div {
    width: 44%;
    height: 3px;

    background-color: #454545;

    border-radius: 4px;
  }

  @media (max-width: 494px) {
    margin-top: 15px;
  }
`;

export const GoogleLogin = styled.div`
  width: 100%;

  font-family: "Montserrat";
  font-size: 0.735rem;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;

  background: #dd4b39;

  margin-top: 15px;

  box-sizing: border-box;
  padding: 0 15px 0 auto;

  border: none;
  border-radius: 4px;

  position: relative;

  cursor: pointer;

  :before {
    content: "";

    width: 40px;
    height: 100%;

    box-sizing: border-box;

    border-right: #bb3f30 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
      7px 9px no-repeat;

    position: absolute;
    top: 0;
    left: 0;
  }

  :hover,
  :focus {
    background: #e74b37;
    outline: none;
  }

  :active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
`;

export const FacebookLogin = styled.div`
  width: 100%;

  font-family: "Montserrat";
  font-size: 0.735rem;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  text-shadow: 0 -1px 0 #354c8c;

  background: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);

  margin-top: 15px;

  box-sizing: border-box;
  padding: 0 15px 0 auto;

  border: none;
  border-radius: 4px;

  position: relative;

  cursor: pointer;

  :before {
    content: "";

    width: 40px;
    height: 100%;

    box-sizing: border-box;

    border-right: #364e92 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png")
      7px 9px no-repeat;

    position: absolute;
    top: 0;
    left: 0;
  }
  :hover,
  :focus {
    outline: none;
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
  }

  :active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
`;

export const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    padding: "110px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflowY: "auto",
    overflowX: "hidden",
  },
  content: {
    width: "520px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#2c2c2c",
    border: "hidden",
    boxSizing: "border-box",
    padding: "35px 30px",
    borderRadius: "4px",
  },
};
