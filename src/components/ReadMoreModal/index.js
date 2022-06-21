import {
  StyledModal,
  ModalHeader,
  Description,
  ButtonContainer,
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
  formatPrice,
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
          <p className="modal-title">{serviceData?.name}</p>
          <IoClose className="close-icon" onClick={() => closeModal()} />
        </ModalHeader>
        <Description>{serviceData?.description}</Description>
        <ButtonContainer>
          <div>
            <p className="price">{`R$ ${formatPrice(serviceData?.price)}`}</p>
            <p className="duration">{serviceData?.duration}</p>
          </div>
          <button onClick={() => handleReservation()}>Reservar</button>
        </ButtonContainer>
      </StyledModal>
    </>
  );
}
