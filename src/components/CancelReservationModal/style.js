import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  .close-icon {
    font-size: 2.4rem;
    color: black;

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

  text-align: center;
  @media (max-width: 739px) {
    font-size: 1.8rem;
  }

  @media (max-width: 424px) {
    font-size: 1.5rem;
  }
`;

export const ActionButtons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 12px;

  button {
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

    padding: 12px 58px;

    border-radius: 4px;
    border: 4px solid #96885f;

    cursor: pointer;

    :hover {
      transition: 0.3s ease-out;
      background-color: #96885f;
    }
  }

  @media (max-width: 739px) {
    button {
      padding: 12px 43px;
    }
  }

  @media (max-width: 457px) {
    button {
      padding: 10px 25px;
    }
  }

  @media (max-width: 370px) {
    p {
      font-size: 0.695rem;
    }

    button {
      font-size: 0.635rem;
      padding: 10px 20px;
    }
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
    padding: "110px 0",
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
