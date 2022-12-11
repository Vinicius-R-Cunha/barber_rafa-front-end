import styled from "styled-components";
import * as variables from "../../styles/variables";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  .close-icon {
    font-size: 1.888rem;
    color: ${variables.WHITE};

    margin-top: -5px;
    margin-right: -14px;

    cursor: pointer;
  }

  @media (max-width: 640px) {
    width: 65%;
  }

  @media (max-width: 424px) {
    width: 59%;

    .close-icon {
      margin-top: -5px;
      margin-right: -6px;
    }
  }

  @media (max-width: 340px) {
    width: 50%;

    .close-icon {
      margin-top: -5px;
      margin-right: -6px;
    }
  }
`;

export const Title = styled.p`
  width: 75%;

  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${variables.WHITE};
`;

export const Description = styled.div`
  width: 100%;

  font-family: "Montserrat";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.297em;
  letter-spacing: 0;
  color: ${variables.LIGHT_GREY};

  padding-top: 25px;

  @media (max-width: 640px) {
    width: 65%;
  }

  @media (max-width: 424px) {
    width: 60%;

    font-size: 0.925rem;
  }

  @media (max-width: 340px) {
    width: 50%;

    font-size: 0.925rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 35px;

  button {
    all: unset;

    font-family: "Montserrat";
    font-size: 1.275rem;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: 0.7px;
    color: ${variables.WHITE};

    padding: 19px 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    border: 4px solid ${variables.DARK_YELLOW};

    cursor: pointer;

    :hover {
      transition: 0.3s ease-out;
      background-color: ${variables.DARK_YELLOW};
    }
  }

  @media (max-width: 640px) {
    width: 65%;

    button {
      font-size: 0.925rem;
      padding: 10px 90px;
    }
  }

  @media (max-width: 424px) {
    width: 60%;

    button {
      font-size: 0.925rem;
      padding: 10px 80px;
    }
  }

  @media (max-width: 340px) {
    width: 50%;

    button {
      font-size: 0.925rem;
      padding: 7px 60px;
    }
  }
`;

export const Price = styled.p`
  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${variables.WHITE};

  @media (max-width: 640px) {
    font-size: 1.388rem;
  }

  @media (max-width: 424px) {
    font-size: 1.188rem;
  }

  @media (max-width: 340px) {
    font-size: 1.188rem;
  }
`;

export const Duration = styled.p`
  font-family: "Montserrat";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.167em;
  letter-spacing: 0;
  color: ${variables.LIGHT_GREY};

  @media (max-width: 640px) {
    font-size: 0.925rem;
  }

  @media (max-width: 424px) {
    font-size: 0.725rem;
  }

  @media (max-width: 340px) {
    font-size: 0.725rem;
  }
`;

export const Button = styled.button`
  all: unset;

  font-family: "Montserrat";
  font-size: 1.275rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  padding: 19px 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 4px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 640px) {
    font-size: 0.925rem;
    padding: 10px 90px;
  }

  @media (max-width: 424px) {
    font-size: 0.925rem;
    padding: 10px 80px;
  }

  @media (max-width: 340px) {
    font-size: 0.925rem;
    padding: 7px 60px;
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
    paddingTop: "220px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflowY: "auto",
    overflowX: "hidden",
  },
  content: {
    width: "650px",
    position: "fixed",
    top: "150px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: variables.LESS_DARK_GREY,
    border: "hidden",
    boxSizing: "border-box",
    padding: "20px 35px",
    borderRadius: "4px",
  },
};
