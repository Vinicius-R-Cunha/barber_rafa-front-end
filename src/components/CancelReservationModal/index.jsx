import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { Title, ActionButtons, Button, modalStyles } from "./style";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import Modal from "../Modal";

export default function CancelReservationModal({
  openModal,
  setOpenModal,
  renderPage,
  eventId,
}) {
  const { token } = useUserContext();

  const [loading, setLoading] = useState(false);

  function closeModal() {
    document.body.style.overflow = "unset";
    setOpenModal(false);
  }

  async function handleCancelReservation() {
    setLoading(true);
    const promise = await api.deleteReservation(token, eventId);
    setLoading(false);
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
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      <Title>Tem certeza que quer excluir essa reserva?</Title>

      {loading ? (
        <ActionButtons>
          <Button>Cancelar</Button>
          <Button>{renderDotsLoading()}</Button>
        </ActionButtons>
      ) : (
        <ActionButtons>
          <Button onClick={closeModal}>Cancelar</Button>
          <Button onClick={handleCancelReservation}>Confirmar</Button>
        </ActionButtons>
      )}
    </Modal>
  );
}
