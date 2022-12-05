import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import handleApiErrors from "../../utils/handleApiErrors";
import renderToast from "../../utils/renderToast";
import {
  StyledModal,
  Title,
  InputsForm,
  Input,
  ActionButtons,
  RangeInput,
  Textarea,
  Button,
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

  const { token } = useUserContext();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [duration, setDuration] = useState("15min");

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

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "create") return createService();
    if (type === "delete") return deleteService();
    if (type === "edit") return editService();
  }

  async function createService() {
    const response = await api.createService(token, categoryData._id, {
      ...formData,
      duration,
    });
    if (response.status === 201) return handleSuccess("Serviço criado!");

    return handleError(response.data);
  }

  async function deleteService() {
    const response = await api.deleteService(
      token,
      categoryData._id,
      serviceData._id
    );
    if (response.status === 200) return handleSuccess("Serviço excluído!");

    return handleError(response.data);
  }

  async function editService() {
    const response = await api.editService(
      token,
      categoryData._id,
      serviceData._id,
      {
        ...formData,
        duration,
      }
    );
    if (response.status === 200) return handleSuccess("Serviço editado!");

    return handleApiErrors(response);
  }

  function handleSuccess(message) {
    closeModal();
    renderPage();

    return renderToast("success", message);
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
      {type === "create" && <Title>Criar Serviço</Title>}
      {type === "edit" && <Title>Editar Serviço</Title>}
      {type === "delete" && (
        <Title>Tem certeza que quer excluir esse serviço?</Title>
      )}
      <InputsForm>
        {type !== "delete" && (
          <>
            <Input
              name="name"
              type="text"
              placeholder="Título"
              onChange={(e) => handleFormData(e)}
              value={formData.name}
              required
            />
            <Input
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
            <Textarea
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
          <Button type="button" onClick={() => closeModal()}>
            Cancelar
          </Button>
          <Button onClick={(e) => handleSubmit(e)}>Confirmar</Button>
        </ActionButtons>
      </InputsForm>
    </StyledModal>
  );
}
