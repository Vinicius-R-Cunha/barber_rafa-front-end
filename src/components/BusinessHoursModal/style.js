import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .close-icon {
    font-size: 2.4rem;
    color: #e1e1e1;

    position: absolute;
    top: 7px;
    right: 8px;

    cursor: pointer;
  }

  .go-back-icon {
    font-size: 2.4rem;
    color: #e1e1e1;

    position: absolute;
    top: 7px;
    left: 8px;

    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  color: #96885f;

  margin-bottom: 35px;

  @media (max-width: 424px) {
    font-size: 1.9rem;
  }
`;

export const WeekDay = styled.div`
  width: 90%;

  font-family: "Montserrat";
  font-size: 1.075rem;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: 0.7px;
  color: #e1e1e1;

  display: flex;
  align-items: center;

  padding: 18px;

  border-top: 1px solid #96885f;

  position: relative;

  cursor: pointer;

  :last-of-type {
    border-bottom: 1px solid #96885f;
  }

  p {
    :first-of-type {
      width: 180px;
    }
  }

  .arrow-icon {
    font-size: 1.2rem;

    position: absolute;
    right: 10px;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  margin-bottom: 30px;

  p {
    font-family: "Montserrat";
    font-size: 1.075rem;
    font-weight: 700;
    line-height: 1.4em;
    text-align: center;
    letter-spacing: 1.2px;
    color: #e1e1e1;
  }

  input {
    width: 20px;
    height: 20px;

    margin-bottom: 5px;

    cursor: pointer;
  }

  @media (max-width: 500px) {
    gap: 10px;

    p {
      font-size: 0.755rem;
    }

    input {
      width: 15px;
      height: 15px;

      cursor: pointer;
    }
  }
`;

export const Schedule = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;

  p {
    width: 35%;

    font-family: "Montserrat";
    font-size: 1.075rem;
    font-weight: 700;
    line-height: 1.4em;
    text-align: center;
    letter-spacing: 1.2px;
    color: #e1e1e1;
  }

  input {
    width: 60%;
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.755rem;
    }
  }

  @media (max-width: 368px) {
    p {
      font-size: 0.625rem;
    }
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

  padding: 12px 58px;

  border-radius: 4px;
  border: 4px solid #96885f;

  margin-top: 10px;

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: #96885f;
  }

  @media (max-width: 739px) {
    padding: 12px 43px;
  }

  @media (max-width: 457px) {
    padding: 10px 25px;
  }

  @media (max-width: 370px) {
    font-size: 0.635rem;
    padding: 10px 20px;
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
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflowY: "auto",
    overflowX: "hidden",
  },
  content: {
    width: "520px",
    minHeight: "355px",
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

export const toastStyles = {
  position: "bottom-left",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
