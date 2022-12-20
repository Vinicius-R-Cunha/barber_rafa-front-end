import { useState, useRef } from "react";
import { renderDotsLoading } from "../../../utils/renderDotsLoading";
import PhoneNumberInput from "../../PhoneNumberInput";
import PasswordInput from "../../PasswordInput";
import renderToast from "../../../utils/renderToast";
import * as api from "../../../services/api";
import { InputsForm, LinkButtonDiv, NavigationText, Button } from "../style";
import handleApiErrors from "../../../utils/handleApiErrors";

export default function SignUp({ setPage }) {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  async function signUp(e) {
    e.preventDefault();

    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const password = passwordRef?.current?.value;

    setLoading(true);
    const response = await api.signUp({ name, email, phone, password });
    setLoading(false);

    if (response.status === 201) {
      renderToast("success", "Cadastro realizado com sucesso!");
      setPage("entrar");
      return;
    }

    handleApiErrors(response);
    return;
  }

  return (
    <InputsForm>
      <input type="text" placeholder="Nome completo" ref={nameRef} required />
      <input type="email" placeholder="E-mail" ref={emailRef} required />
      <PhoneNumberInput
        placeholder="Número do celular"
        reference={phoneRef}
        required={true}
      />
      <PasswordInput placeholder={"Senha"} reference={passwordRef} />

      <LinkButtonDiv>
        <NavigationText onClick={() => setPage("entrar")}>
          Já possuo cadastro
        </NavigationText>

        {loading ? (
          <Button type="button" disabled>
            {renderDotsLoading()}
          </Button>
        ) : (
          <Button onClick={(e) => signUp(e)}>Cadastrar</Button>
        )}
      </LinkButtonDiv>
    </InputsForm>
  );
}
