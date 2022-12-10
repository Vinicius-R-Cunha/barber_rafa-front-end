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

export default function ReadMoreModal({
  readMoreModalIsOpen,
  setReadMoreModalIsOpen,
  readMoreData,
  handleReservation,
}) {
  function closeModal() {
    document.body.style.overflow = "unset";
    setReadMoreModalIsOpen(false);
  }

  return (
    <>
      <StyledModal
        isOpen={readMoreModalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <ModalHeader>
          <Title>{readMoreData?.name}</Title>
          <IoClose className="close-icon" onClick={closeModal} />
        </ModalHeader>
        <Description>{readMoreData?.description}</Description>
        <ButtonContainer>
          <div>
            <Price>{`R$ ${readMoreData?.price}`}</Price>
            <Duration>{readMoreData?.duration}</Duration>
          </div>
          <Button
            onClick={() => {
              closeModal();
              handleReservation(readMoreData);
            }}
          >
            Reservar
          </Button>
        </ButtonContainer>
      </StyledModal>
    </>
  );
}
