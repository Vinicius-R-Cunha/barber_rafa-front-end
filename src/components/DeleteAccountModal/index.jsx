import { useNavigate } from "react-router-dom";
import renderToast from "../../utils/renderToast";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import { Title, ActionButtons, Button, modalStyles } from "./style";
import handleApiErrors from "../../utils/handleApiErrors";
import Modal from "../Modal";

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

  async function deleteAccount() {
    const response = await api.deleteAccount(token);
    if (response.status === 200) {
      closeModal();
      clearToken();
      navigate("/");
      renderToast("success", "Conta excluída com sucesso");
      return;
    }

    handleApiErrors(response);
    return;
  }

  function clearToken() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <Modal
      isOpen={deleteAccountModalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      <Title>Tem certeza que quer excluir sua conta?</Title>

      <ActionButtons>
        <Button type="button" onClick={closeModal}>
          Cancelar
        </Button>
        <Button onClick={deleteAccount}>Confirmar</Button>
      </ActionButtons>
    </Modal>
  );
}
