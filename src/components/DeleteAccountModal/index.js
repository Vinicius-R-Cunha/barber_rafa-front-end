import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  ActionButtons,
  Button,
  modalStyles,
  toastStyles,
} from "./style";

export default function DeleteAccountModal({
  deleteAccountModalIsOpen,
  setDeleteAccountModalIsOpen,
}) {
  const { token, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  function closeModal() {
    document.body.style.overflow = "unset";
    setDeleteAccountModalIsOpen(false);
  }

  function handleSubmit() {
    deleteAccount();
    return;
  }

  async function deleteAccount() {
    const response = await api.deleteAccount(token);
    if (response.status === 200) {
      closeModal();
      clearToken();
      navigate("/");
      return toast.success("Conta excluída com sucesso", toastStyles);
    }

    return handleError(response.data);
  }

  function handleError(responseData) {
    if (responseData) return toast.error(responseData, toastStyles);

    return toast.error(
      "Erro no servidor, tente novamente em alguns momentos",
      toastStyles
    );
  }

  function clearToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <StyledModal
      isOpen={deleteAccountModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-icon" onClick={() => closeModal()} />

      <Title>Tem certeza que quer excluir sua conta?</Title>

      <ActionButtons>
        <Button type="button" onClick={() => closeModal()}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit}>Confirmar</Button>
      </ActionButtons>
    </StyledModal>
  );
}
