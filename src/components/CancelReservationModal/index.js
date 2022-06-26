import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import {
  StyledModal,
  Title,
  ActionButtons,
  Button,
  modalStyles,
  toastStyles,
} from "./style";
import * as api from "../../services/api";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

export default function CancelReservationModal({
  confirmationIsOpen,
  setConfirmationIsOpen,
  renderPage,
  eventId,
}) {
  const { token } = useContext(UserContext);

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
      return toast.success("Reserva cancelada com sucesso", toastStyles);
    }
    return toast.error(
      "Erro ao cancelar reserva, por favor tente mais tarde",
      toastStyles
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
          <Button>
            <ThreeDots color="#E1E1E1" height={13} width={51} />
          </Button>
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
