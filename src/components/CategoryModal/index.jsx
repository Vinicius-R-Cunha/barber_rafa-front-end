import { useEffect, useState } from "react";
import renderToast from "../../utils/renderToast";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  Title,
  InputsForm,
  Input,
  ActionButtons,
  Button,
  modalStyles,
} from "./style";
import handleApiErrors from "../../utils/handleApiErrors";
import Modal from "../Modal";

export default function CategoryModal({
  categoryModalIsOpen,
  setCategoryModalIsOpen,
  categoryData,
  type,
  renderPage,
}) {
  const { token } = useUserContext();

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

    return handleApiErrors(response);
  }

  async function deleteCategory() {
    const response = await api.deleteCategory(token, categoryData._id);
    if (response.status === 200) return handleSuccess("Categoria excluída!");

    return handleApiErrors(response);
  }

  async function editCategory() {
    const response = await api.editCategory(token, categoryData._id, {
      title,
    });
    if (response.status === 200) return handleSuccess("Categoria editada!");

    return handleApiErrors(response);
  }

  function handleSuccess(message) {
    closeModal();
    renderPage();

    return renderToast("success", message);
  }

  return (
    <Modal
      isOpen={categoryModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
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
    </Modal>
  );
}
