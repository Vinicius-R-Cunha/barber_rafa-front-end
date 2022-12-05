import { useState, useRef } from "react";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import { Container, Title, InputsForm, Button } from "./style";
import * as api from "../../services/api";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput";

export default function ResetPasswordForm({ hash }) {
  const navigate = useNavigate();

  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    return resetPassword();
  }

  async function resetPassword() {
    const response = await api.resetPassword(hash, {
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    });
    setSubmitIsLoading(false);

    if (response.status === 200) {
      navigate("/");
      renderToast("success", "Senha alterada com sucesso!");
      return;
    }

    handleResponseErrors(response);
    return;
  }

  function handleResponseErrors(response) {
    if (response.status === 422) {
      renderToast("error", response.data.error);
      return;
    }

    if (response.data) {
      renderToast("error", response.data);
      return;
    }

    return;
  }

  return (
    <Container>
      <Title>Redefinir senha</Title>
      <InputsForm>
        <PasswordInput placeholder={"senha"} reference={passwordRef} />
        <PasswordInput
          placeholder={"confirme sua senha"}
          reference={passwordConfirmationRef}
        />

        {submitIsLoading ? (
          <Button type="button" disabled>
            {renderDotsLoading()}
          </Button>
        ) : (
          <Button onClick={(e) => handleSubmit(e)}>Redefinir</Button>
        )}
      </InputsForm>
    </Container>
  );
}
