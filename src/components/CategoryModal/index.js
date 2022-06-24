import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import { StyledModal, InputsForm, ActionButtons, modalStyles } from "./style";

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

  async function handleSubmit(e) {
    e.preventDefault();

    if (type === "create") {
      const created = await api.createCategory(token, { title });
      if (created) {
        closeModal();
        renderPage();
      }
    } else if (type === "delete") {
      const deleted = await api.deleteCategory(token, categoryData._id);
      if (deleted) {
        closeModal();
        renderPage();
      }
    } else if (type === "edit") {
      const edited = await api.editCategory(token, categoryData._id, {
        title,
      });
      if (edited) {
        closeModal();
        renderPage();
      }
    }
  }

  return (
    <StyledModal
      isOpen={categoryModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-button" onClick={() => closeModal()} />
      {type === "create" && <p className="title">Criar Categoria</p>}
      {type === "edit" && <p className="title">Editar Categoria</p>}
      {type === "delete" && (
        <p className="title">Tem certeza que quer excluir essa categoria?</p>
      )}
      <InputsForm>
        {type !== "delete" && (
          <input
            name="title"
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        )}

        <ActionButtons>
          <button type="button" onClick={() => closeModal()}>
            Cancelar
          </button>
          <button onClick={(e) => handleSubmit(e)}>Confirmar</button>
        </ActionButtons>
      </InputsForm>
    </StyledModal>
  );
}
