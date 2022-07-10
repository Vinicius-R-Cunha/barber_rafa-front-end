import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .c1 {
    box-sizing: unset;
    padding: 10px;
    border-radius: 8px;
  }

  .close-icon {
    font-size: 1.888rem;
    color: #e1e1e1;

    position: absolute;
    top: 15px;
    right: 20px;

    cursor: pointer;
  }

  @media (max-width: 424px) {
    .close-icon {
      right: 34px;
    }
  }

  @media (max-width: 372px) {
    .c1 {
      width: 318px;
    }
  }

  @media (max-width: 340px) {
    .c1 {
      width: 298px;
    }
  }
`;

export const ModalHeader = styled.div`
  width: 90%;

  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  align-self: flex-start;

  margin-bottom: 30px;
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #e1e1e1;
`;

export const AddCancelServices = styled.div`
  width: 80%;
  height: 55px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 35px;

  button {
    all: unset;

    width: 45%;
    height: 100%;

    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1em;
    text-align: center;
    letter-spacing: 0.4px;
    color: #e1e1e1;

    border-radius: 4px;
    border: 4px solid #96885f;

    cursor: pointer;

    :hover {
      transition: 0.3s ease-out;
      background-color: #96885f;
    }
  }

  @media (max-width: 550px) {
    width: 372px;
  }

  @media (max-width: 372px) {
    width: 340px;
  }

  @media (max-width: 340px) {
    width: 318px;

    button {
      font-size: 0.8rem;
    }
  }
`;

export const DateStatus = styled.div`
  font-family: "Montserrat";
  font-size: 1.275rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-align: center;
  color: #e1e1e1;

  margin-top: 35px;

  @media (max-width: 640px) {
    font-size: 1.075rem;
  }
`;

export const ScheduleContainer = styled.div`
  width: 90%;

  margin-top: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  .nav-arrow-left {
    font-size: 2rem;
    color: #e1e1e1;

    position: absolute;
    left: -20px;

    cursor: pointer;
  }

  .nav-arrow-right {
    font-size: 2rem;
    color: #e1e1e1;

    position: absolute;
    right: -20px;

    cursor: pointer;
  }

  @media (max-width: 1023px) {
    .nav-arrow-left {
      display: none;
    }

    .nav-arrow-right {
      display: none;
    }
  }

  @media (max-width: 640px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 400px;
  }

  @media (max-width: 424px) {
    width: 380px;
  }

  @media (max-width: 340px) {
    width: 343px;
  }
`;

export const ScrollableDiv = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  align-items: center;
  overflow: hidden;

  .inside-scroll {
    width: 100%;
    height: 100%;

    display: flex;

    gap: 20px;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    width: 90%;
  }
`;

export const Timetable = styled.p`
  width: 70px;

  font-family: "Montserrat";
  font-size: 1.075rem;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: #e1e1e1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;

  padding: 12px 10px;

  border-radius: 5px;
  border: 2px solid #96885f;

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: #96885f;
  }

  @media (max-width: 424px) {
    font-size: 0.9rem;

    padding: 10px 3px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 40px;

  @media (max-width: 640px) {
    width: 90%;
  }

  @media (max-width: 424px) {
    width: 80%;
  }
`;

export const Price = styled.p`
  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #e1e1e1;

  @media (max-width: 640px) {
    font-size: 1.188rem;
  }

  @media (max-width: 424px) {
    font-size: 1.288rem;
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
  color: #8d8d8d;

  @media (max-width: 640px) {
    font-size: 0.825rem;
  }

  @media (max-width: 424px) {
    font-size: 0.825rem;
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
  color: #e1e1e1;

  padding: 23px 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 4px solid #96885f;

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: #96885f;
  }

  @media (max-width: 640px) {
    font-size: 0.725rem;
    padding: 17px 20px;
  }

  @media (max-width: 424px) {
    padding: 18px 15px;
  }

  @media (max-width: 340px) {
    font-size: 0.625rem;
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
    padding: "100px 0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    overflowY: "auto",
    overflowX: "hidden",
  },
  content: {
    width: "650px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#2c2c2c",
    border: "hidden",
    boxSizing: "border-box",
    padding: "20px 35px 30px 35px",
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
