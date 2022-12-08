import { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  Description,
  InputsForm,
  LinkButtonDiv,
  NavigationText,
  ForgotPassword,
  Button,
  Spacer,
  GoogleLogin,
  // FacebookLogin,
  modalStyles,
} from "./style";
import { signInWithGoogle } from "../../services/Firebase";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import PasswordInput from "../PasswordInput";
import handleApiErrors from "../../utils/handleApiErrors";
import PhoneNumberInput from "../PhoneNumberInput";
// import { signInWithGoogle, signInWithFacebook } from "../../services/Firebase";

export default function AuthenticationModal() {
  const {
    authenticationIsOpen,
    setAuthenticationIsOpen,
    setToken,
    setLoadingUserValidation,
  } = useUserContext();

  const [page, setPage] = useState("entrar");
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  function closeModal() {
    document.body.style.overflow = "unset";
    setAuthenticationIsOpen(false);

    setPage("entrar");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const phone = phoneRef?.current?.value;
    const password = passwordRef?.current?.value;

    if (page === "inscrever-se")
      return signUp({ name, email, phone, password });
    if (page === "entrar") return signIn({ email, password });
    if (page === "redefinir senha") return sendRecuperationEmail(email);
  }

  async function signUp(data) {
    const response = await api.signUp(data);
    setSubmitIsLoading(false);

    if (response.status === 201) {
      renderToast("success", "Cadastro realizado com sucesso!");
      setPage("entrar");
      return;
    }

    handleApiErrors(response);
    return;
  }

  async function signIn(data) {
    const response = await api.signIn(data);
    setSubmitIsLoading(false);

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

  async function sendRecuperationEmail(data) {
    const response = await api.sendRecuperationEmail(data);
    setSubmitIsLoading(false);

    if (response.status === 200) {
      renderToast("success", `Email de recuperação enviado para ${data}`);
      closeModal();
      return;
    }

    handleApiErrors(response);
    return;
  }

  function togglePage() {
    if (page === "inscrever-se" || page === "redefinir senha")
      return setPage("entrar");
    if (page === "entrar") return setPage("inscrever-se");
  }

  return (
    <StyledModal
      isOpen={authenticationIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-button" onClick={() => closeModal()} />
      <Title>{page}</Title>

      {page === "redefinir senha" && (
        <Description>
          Insira seu email cadastrado para recuperar sua senha
        </Description>
      )}

      <InputsForm>
        {page === "inscrever-se" && (
          <input
            type="text"
            placeholder="Nome completo"
            ref={nameRef}
            required
          />
        )}
        <input type="email" placeholder="E-mail" ref={emailRef} required />
        {page === "inscrever-se" && (
          <PhoneNumberInput
            placeholder="Número do celular"
            reference={phoneRef}
            required={true}
          />
        )}
        {page !== "redefinir senha" && (
          <PasswordInput placeholder={"Senha"} reference={passwordRef} />
        )}
        <LinkButtonDiv>
          <NavigationText onClick={togglePage}>
            {page === "entrar" ? "Não" : "Já"} possuo cadastro
          </NavigationText>

          <ForgotPassword onClick={() => setPage("redefinir senha")}>
            {page === "entrar" && "Esqueceu sua senha?"}
          </ForgotPassword>

          {submitIsLoading ? (
            <Button type="button" disabled>
              {renderDotsLoading()}
            </Button>
          ) : (
            <Button onClick={(e) => handleSubmit(e)}>
              {page === "entrar" && "entrar"}
              {page === "inscrever-se" && "cadastrar"}
              {page === "redefinir senha" && "enviar"}
            </Button>
          )}
        </LinkButtonDiv>

        <Spacer>
          <div></div> ou <div></div>
        </Spacer>

        <GoogleLogin
          onClick={() =>
            signInWithGoogle(setToken, closeModal, setLoadingUserValidation)
          }
        >
          Entrar com Google
        </GoogleLogin>

        {/* <FacebookLogin
          onClick={() =>
            signInWithFacebook(setToken, closeModal, setLoadingUserValidation)
          }
        >
          Entrar com Facebook
        </FacebookLogin> */}
      </InputsForm>
    </StyledModal>
  );
}
