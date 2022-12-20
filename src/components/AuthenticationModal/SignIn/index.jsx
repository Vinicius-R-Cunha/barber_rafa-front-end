import { useState, useRef } from "react";
import { renderDotsLoading } from "../../../utils/renderDotsLoading";
import PasswordInput from "../../PasswordInput";
import renderToast from "../../../utils/renderToast";
import * as api from "../../../services/api";
import {
  InputsForm,
  LinkButtonDiv,
  NavigationText,
  ForgotPassword,
  Button,
} from "../style";
import { useUserContext } from "../../../contexts/UserContext";
import handleApiErrors from "../../../utils/handleApiErrors";

export default function SignIn({ closeModal, setPage }) {
  const { setToken } = useUserContext();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function signIn(e) {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    setLoading(true);
    const response = await api.signIn({ email, password });
    setLoading(false);

    if (response.status === 200) {
      localStorage.setItem("token", response.data);
      setToken(response.data);
      closeModal();
      renderToast("success", "Login efetuado!");
      return;
    }

    handleApiErrors(response);
    return;
  }

  return (
    <InputsForm>
      <input type="email" placeholder="E-mail" ref={emailRef} required />
      <PasswordInput placeholder={"Senha"} reference={passwordRef} />

      <LinkButtonDiv>
        <NavigationText onClick={() => setPage("inscrever-se")}>
          Não possuo cadastro
        </NavigationText>

        <ForgotPassword onClick={() => setPage("redefinir senha")}>
          Esqueceu sua senha?
        </ForgotPassword>

        {loading ? (
          <Button type="button" disabled>
            {renderDotsLoading()}
          </Button>
        ) : (
          <Button onClick={(e) => signIn(e)}>Entrar</Button>
        )}
      </LinkButtonDiv>
    </InputsForm>
  );
}
