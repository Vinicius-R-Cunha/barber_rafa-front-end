import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  InputsForm,
  Input,
  ActionButtons,
  Button,
  modalStyles,
  toastStyles,
} from "./style";

export default function CategoryModal({
  categoryModalIsOpen,
  setCategoryModalIsOpen,
  categoryData,
  type,
  renderPage,
}) {
  const { token } = useContext(UserContext);

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (type === "edit") {
      setTitle(categoryData.title);
    } else {
      setTitle("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, categoryModalIsOpen]);

  function closeModal() {
    document.body.style.overflow = "unset";
    setCategoryModalIsOpen(false);
    setTitle("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "create") return createCategory();
    if (type === "delete") return deleteCategory();
    if (type === "edit") return editCategory();
  }

  async function createCategory() {
    const response = await api.createCategory(token, { title });
    if (response.status === 201) return handleSuccess("Categoria criada!");

    return handleError(response.data);
  }

  async function deleteCategory() {
    const response = await api.deleteCategory(token, categoryData._id);
    if (response.status === 200) return handleSuccess("Categoria excluída!");

    return handleError(response.data);
  }

  async function editCategory() {
    const response = await api.editCategory(token, categoryData._id, {
      title,
    });
    if (response.status === 200) return handleSuccess("Categoria editada!");

    return handleError(response.data);
  }

  function handleSuccess(message) {
    closeModal();
    renderPage();

    return toast.success(message, toastStyles);
  }

  function handleError(responseData) {
    if (responseData) return toast.error(responseData, toastStyles);

    return toast.error(
      "Erro no servidor, tente novamente em alguns momentos",
      toastStyles
    );
  }

  return (
    <StyledModal
      isOpen={categoryModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-icon" onClick={() => closeModal()} />
      {type === "create" && <Title>Criar Categoria</Title>}
      {type === "edit" && <Title>Editar Categoria</Title>}
      {type === "delete" && (
        <Title>Tem certeza que quer excluir essa categoria?</Title>
      )}
      <InputsForm>
        {type !== "delete" && (
          <Input
            name="title"
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        )}

        <ActionButtons>
          <Button type="button" onClick={() => closeModal()}>
            Cancelar
          </Button>
          <Button onClick={(e) => handleSubmit(e)}>Confirmar</Button>
        </ActionButtons>
      </InputsForm>
    </StyledModal>
  );
}
