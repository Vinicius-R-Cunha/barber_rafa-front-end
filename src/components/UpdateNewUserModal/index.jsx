import { useRef, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import PhoneNumberInput from "../PhoneNumberInput";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import { StyledModal, Title, InputsForm, Button, modalStyles } from "./style";
import handleApiErrors from "../../utils/handleApiErrors";

export default function UpdateNewUserModal() {
  const { token, setToken, userIsNewUser, setUserIsNewUser } = useUserContext();

  const phoneRef = useRef(null);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  function closeModal() {
    document.body.style.overflow = "unset";
    setUserIsNewUser(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const phone = phoneRef?.current?.value;

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

    handleApiErrors(response);
    setSubmitIsLoading(false);
    return;
  }

  return (
    <StyledModal isOpen={userIsNewUser} ariaHideApp={false} style={modalStyles}>
      <Title>
        Digite o número do seu celular, isso só é necessário uma única vez
      </Title>
      <InputsForm>
        <PhoneNumberInput
          placeholder="Número do celular"
          reference={phoneRef}
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
