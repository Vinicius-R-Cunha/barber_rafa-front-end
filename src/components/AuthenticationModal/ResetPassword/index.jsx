import { useState, useRef } from "react";
import { renderDotsLoading } from "../../../utils/renderDotsLoading";
import * as api from "../../../services/api";
import renderToast from "../../../utils/renderToast";
import {
  InputsForm,
  Description,
  LinkButtonDiv,
  NavigationText,
  Button,
} from "../style";
import handleApiErrors from "../../../utils/handleApiErrors";

export default function ResetPassword({ closeModal, setPage }) {
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);

  async function sendRecuperationEmail(e) {
    e.preventDefault();

    const email = emailRef?.current?.value;

    setLoading(true);
    const response = await api.sendRecuperationEmail(email);
    setLoading(false);

    if (response.status === 200) {
      renderToast("success", `Email de recuperação enviado para ${email}`);
      closeModal();
      return;
    }

    handleApiErrors(response);
    return;
  }

  return (
    <>
      <Description>
        Insira seu email cadastrado para recuperar sua senha
      </Description>
      <InputsForm>
        <input type="email" placeholder="E-mail" ref={emailRef} required />

        <LinkButtonDiv>
          <NavigationText onClick={() => setPage("entrar")}>
            Já possuo cadastro
          </NavigationText>

          {loading ? (
            <Button type="button" disabled>
              {renderDotsLoading()}
            </Button>
          ) : (
            <Button onClick={(e) => sendRecuperationEmail(e)}>Enviar</Button>
          )}
        </LinkButtonDiv>
      </InputsForm>
    </>
  );
}
