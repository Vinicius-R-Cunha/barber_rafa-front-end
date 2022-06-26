import {
  StyledModal,
  ModalHeader,
  Title,
  Description,
  ButtonContainer,
  Price,
  Duration,
  Button,
  modalStyles,
} from "./style";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function ReadMoreModal({
  readMoreModalIsOpen,
  setReadMoreModalIsOpen,
  serviceData,
  setReservationModalIsOpen,
}) {
  const { token, setAuthenticationIsOpen } = useContext(UserContext);

  function closeModal() {
    document.body.style.overflow = "unset";
    setReadMoreModalIsOpen(false);
  }

  function handleReservation() {
    closeModal();
    if (!token) {
      setAuthenticationIsOpen(true);
      document.body.style.overflow = "hidden";
      return;
    }
    setReservationModalIsOpen(true);
    document.body.style.overflow = "hidden";
    return;
  }

  return (
    <>
      <StyledModal
        isOpen={readMoreModalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => closeModal()}
        style={modalStyles}
      >
        <ModalHeader>
          <Title>{serviceData?.name}</Title>
          <IoClose className="close-icon" onClick={() => closeModal()} />
        </ModalHeader>
        <Description>{serviceData?.description}</Description>
        <ButtonContainer>
          <div>
            <Price>{`R$ ${serviceData?.price}`}</Price>
            <Duration>{serviceData?.duration}</Duration>
          </div>
          <Button onClick={() => handleReservation()}>Reservar</Button>
        </ButtonContainer>
      </StyledModal>
    </>
  );
}
