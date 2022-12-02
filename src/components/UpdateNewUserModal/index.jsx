import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import NumberFormat from "react-number-format";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import { StyledModal, Title, InputsForm, Button, modalStyles } from "./style";

export default function UpdateNewUserModal() {
  const { token, setToken, userIsNewUser, setUserIsNewUser } = useUserContext();

  const [phone, setPhone] = useState("");
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  function closeModal() {
    document.body.style.overflow = "unset";
    setUserIsNewUser(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    const response = await api.updateUser(token, { phone }, "phone");
    if (response.status === 200) {
      localStorage.setItem("token", response.data);
      setToken(response.data);
      setSubmitIsLoading(false);
      closeModal();
      renderToast("success", "Login efetuado!");
      return;
    }

    handleResponseErrors(response);
    setSubmitIsLoading(false);
    return;
  }

  function handleResponseErrors(response) {
    if (response.status === 409) {
      renderToast("error", response.data);
      return;
    }

    if (response.status === 422) {
      renderToast("error", response.data.error);
      return;
    }

    renderToast(
      "error",
      "Erro no servidor, tente novamente em alguns momentos"
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

        {submitIsLoading ? (
          <Button type="button" disabled>
            {renderDotsLoading()}
          </Button>
        ) : (
          <Button onClick={(e) => handleSubmit(e)}>Confirmar</Button>
        )}
      </InputsForm>
    </StyledModal>
  );
}
