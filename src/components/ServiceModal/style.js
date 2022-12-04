import styled from "styled-components";
import * as variables from "../../styles/variables";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .close-button {
    font-size: 2.4rem;
    color: ${variables.WHITE};

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
  color: ${variables.DARK_YELLOW};

  text-align: center;

  @media (max-width: 424px) {
    font-size: 1.9rem;
  }
`;

export const InputsForm = styled.form`
  width: 100%;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 739px) {
    width: 400px;
  }

  @media (max-width: 494px) {
    width: 360px;

    margin-top: 15px;
  }

  @media (max-width: 424px) {
    width: 310px;
  }

  @media (max-width: 370px) {
    width: 265px;
  }
`;

export const Input = styled.input`
  all: unset;

  width: 100%;
  height: 55px;

  font-family: "Montserrat";
  font-size: 0.855rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  box-sizing: border-box;
  padding: 0 25px;

  margin-bottom: 13px;

  border-radius: 4px;
  border: 5px solid #454545;

  ::placeholder {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 424px) {
    font-size: 0.755rem;
  }
`;

export const RangeInput = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;

  p {
    width: 35%;

    font-family: "Montserrat";
    font-size: 0.855rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.7px;
    color: ${variables.WHITE};
  }

  input {
    width: 65%;
  }

  @media (max-width: 424px) {
    input {
      font-size: 0.755rem;
    }
  }
`;

export const Textarea = styled.textarea`
  all: unset;

  width: 100%;
  height: 150px;

  font-family: "Montserrat";
  font-size: 0.855rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  box-sizing: border-box;
  padding: 10px 25px;

  margin-bottom: 13px;

  border-radius: 4px;
  border: 5px solid #454545;

  ::placeholder {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 424px) {
    font-size: 0.755rem;
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
  border: 5px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 739px) {
    padding: 12px 43px;
  }

  @media (max-width: 494px) {
    font-size: 0.735rem;
  }

  @media (max-width: 424px) {
    padding: 10px 20px;
  }

  @media (max-width: 370px) {
    font-size: 0.635rem;
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
    padding: "35px",
    borderRadius: "4px",
  },
};
