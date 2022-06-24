import { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  InputsForm,
  ActionButtons,
  RangeInput,
  modalStyles,
} from "./style";

export default function ServiceModal({
  serviceModalIsOpen,
  setServiceModalIsOpen,
  categoryData,
  serviceData,
  type,
  renderPage,
}) {
  const rangeInputValues = [
    "15min",
    "30min",
    "45min",
    "1h",
    "1h15min",
    "1h30min",
    "1h45min",
    "2h",
    "2h15min",
    "2h30min",
    "2h45min",
    "3h",
  ];

  const { token } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (type === "edit") {
      setFormData({
        name: serviceData.name,
        price: serviceData.price,
        description: serviceData.description,
      });
      setDuration(serviceData.duration);
    } else {
      setFormData({ name: "", price: "", description: "" });
      setDuration("15min");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, serviceModalIsOpen]);

  function closeModal() {
    document.body.style.overflow = "unset";
    setServiceModalIsOpen(false);
    setFormData({
      name: "",
      price: "",
      description: "",
    });
    setDuration("15min");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (type === "create") {
      const created = await api.createService(token, categoryData._id, {
        ...formData,
        duration,
      });
      if (created) {
        closeModal();
        renderPage();
      }
    } else if (type === "delete") {
      const deleted = await api.deleteService(
        token,
        categoryData._id,
        serviceData._id
      );
      if (deleted) {
        closeModal();
        renderPage();
      }
    } else if (type === "edit") {
      const edit = await api.editService(
        token,
        categoryData._id,
        serviceData._id,
        {
          ...formData,
          duration,
        }
      );
      if (edit) {
        closeModal();
        renderPage();
      }
    }
  }

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <StyledModal
      isOpen={serviceModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-button" onClick={() => closeModal()} />
      {type === "create" && <p className="title">Criar Serviço</p>}
      {type === "edit" && <p className="title">Editar Serviço</p>}
      {type === "delete" && (
        <p className="title">Tem certeza que quer excluir esse serviço?</p>
      )}
      <InputsForm>
        {type !== "delete" && (
          <>
            <input
              className="classic-input"
              name="name"
              type="text"
              placeholder="Título"
              onChange={(e) => handleFormData(e)}
              value={formData.name}
              required
            />
            <input
              className="classic-input"
              name="price"
              type="text"
              placeholder="Preço"
              onChange={(e) => handleFormData(e)}
              value={formData.price}
              required
            />
            <RangeInput>
              <p>Duração: {duration}</p>
              <input
                className="range-input"
                name="duration"
                type="range"
                min="0"
                max="11"
                placeholder="Duração"
                onChange={(e) => setDuration(rangeInputValues[e.target.value])}
                value={rangeInputValues.indexOf(duration)}
                required
              />
            </RangeInput>
            <textarea
              name="description"
              type="text"
              placeholder="Descrição"
              onChange={(e) => handleFormData(e)}
              value={formData.description}
              required
            />
          </>
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
