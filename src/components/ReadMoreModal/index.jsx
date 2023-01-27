import {
  Title,
  Description,
  ButtonContainer,
  Price,
  Duration,
  Button,
  modalStyles,
} from "./style";
import Modal from "../Modal";

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
    <Modal
      isOpen={readMoreModalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      <Title>{readMoreData?.name}</Title>
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
    </Modal>
  );
}
