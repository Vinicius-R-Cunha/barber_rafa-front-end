import { useState, useRef } from "react";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import { Container, Title, InputsForm, Button } from "./style";
import * as api from "../../services/api";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput";
import handleApiErrors from "../../utils/handleApiErrors";

export default function ResetPasswordForm({ hash }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  async function resetPassword(e) {
    e.preventDefault();

    setLoading(true);
    const response = await api.resetPassword(hash, {
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    });
    setLoading(false);

    if (response.status === 200) {
      navigate("/");
      renderToast("success", "Senha alterada com sucesso!");
      return;
    }

    handleApiErrors(response);
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

        {loading ? (
          <Button type="button" disabled>
            {renderDotsLoading()}
          </Button>
        ) : (
          <Button onClick={resetPassword}>Redefinir</Button>
        )}
      </InputsForm>
    </Container>
  );
}
