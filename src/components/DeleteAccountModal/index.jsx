import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import renderToast from "../../utils/renderToast";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  ActionButtons,
  Button,
  modalStyles,
} from "./style";
import handleApiErrors from "../../utils/handleApiErrors";

export default function DeleteAccountModal({
  deleteAccountModalIsOpen,
  setDeleteAccountModalIsOpen,
}) {
  const { token, setToken } = useUserContext();

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
      return renderToast("success", "Conta excluída com sucesso");
    }

    handleApiErrors(response);
    return;
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
