import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import { StyledModal, ActionButtons, modalStyles } from "./style";
import * as api from "../../services/api";
import { toast } from "react-toastify";

export default function CancelReservationModal({
    confirmationIsOpen,
    setConfirmationIsOpen,
    renderPage,
    reservationId,
}) {
    const { token } = useContext(UserContext);

    function closeModal() {
        document.body.style.overflow = "unset";
        setConfirmationIsOpen(false);
    }

    async function handleCancelReservation() {
        const promise = await api.deleteReservation(token, reservationId);
        closeModal();
        renderPage();
        if (promise.status === 200) {
            return toast.success("Reserva cancelada com sucesso", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        return toast.error(
            "Erro ao cancelar reserva, por favor tente mais tarde",
            {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    }

    return (
        <StyledModal
            isOpen={confirmationIsOpen}
            ariaHideApp={false}
            onRequestClose={() => closeModal()}
            style={modalStyles}
        >
            <IoClose className="close-button" onClick={() => closeModal()} />
            <p className="title">Tem certeza que quer excluir essa reserva?</p>
            <ActionButtons>
                <button onClick={() => closeModal()}>Cancelar</button>
                <button onClick={() => handleCancelReservation()}>
                    Confirmar
                </button>
            </ActionButtons>
        </StyledModal>
    );
}
