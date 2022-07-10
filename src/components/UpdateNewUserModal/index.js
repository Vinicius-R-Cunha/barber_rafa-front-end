import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import NumberFormat from "react-number-format";
import * as api from "../../services/api";
import { toast } from "react-toastify";
import {
  StyledModal,
  Title,
  InputsForm,
  Button,
  modalStyles,
  toastStyles,
} from "./style";

export default function UpdateNewUserModal() {
  const { token, setToken, userIsNewUser, setUserIsNewUser } =
    useContext(UserContext);

  const [phone, setPhone] = useState("");

  function closeModal() {
    document.body.style.overflow = "unset";
    setUserIsNewUser(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.updateUser(token, { phone });
    if (response.status === 200) {
      localStorage.setItem("token", response.data);
      setToken(response.data);
      closeModal();
      toast.success("Login efetuado!", toastStyles);
      return;
    }

    handleResponseErrors(response);
    return;
  }

  function handleResponseErrors(response) {
    closeModal();
    if (response.status === 409) {
      toast.error(response.data, toastStyles);
      return;
    }

    if (response.status === 422) {
      toast.error(response.data.error, toastStyles);
      return;
    }

    toast.error(
      "Erro no servidor, tente novamente em alguns momentos",
      toastStyles
    );
    return;
  }

  return (
    <StyledModal isOpen={userIsNewUser} ariaHideApp={false} style={modalStyles}>
      <Title>
        Digite o número do seu celular, isso só é necessário uma única vez
      </Title>
      <InputsForm>
        <NumberFormat
          type="text"
          placeholder="Número do celular"
          format={"(##) #####-####"}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />

        <Button onClick={(e) => handleSubmit(e)}>Confirmar</Button>
      </InputsForm>
    </StyledModal>
  );
}
