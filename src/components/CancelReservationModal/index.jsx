import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useUserContext } from "../../contexts/UserContext";
import {
  StyledModal,
  Title,
  ActionButtons,
  Button,
  modalStyles,
} from "./style";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";

export default function CancelReservationModal({
  confirmationIsOpen,
  setConfirmationIsOpen,
  renderPage,
  eventId,
}) {
  const { token } = useUserContext();

  const [isLoading, setIsLoading] = useState(false);

  function closeModal() {
    document.body.style.overflow = "unset";
    setConfirmationIsOpen(false);
  }

  async function handleCancelReservation() {
    setIsLoading(true);
    const promise = await api.deleteReservation(token, eventId);
    setIsLoading(false);
    closeModal();
    renderPage();

    if (promise.status === 200) {
      return renderToast("success", "Reserva cancelada com sucesso");
    }
    return renderToast(
      "error",
      "Erro ao cancelar reserva, por favor tente mais tarde"
    );
  }

  return (
    <StyledModal
      isOpen={confirmationIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-icon" onClick={() => closeModal()} />
      <Title>Tem certeza que quer excluir essa reserva?</Title>
      {isLoading ? (
        <ActionButtons>
          <Button>Cancelar</Button>
          <Button>{renderDotsLoading()}</Button>
        </ActionButtons>
      ) : (
        <ActionButtons>
          <Button onClick={() => closeModal()}>Cancelar</Button>
          <Button onClick={() => handleCancelReservation()}>Confirmar</Button>
        </ActionButtons>
      )}
    </StyledModal>
  );
}
