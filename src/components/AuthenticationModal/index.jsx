import { useState, useRef } from "react";
import { IoEye, IoEyeOff, IoClose } from "react-icons/io5";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  Description,
  InputsForm,
  PasswordContainer,
  LinkButtonDiv,
  NavigationText,
  ForgotPassword,
  Button,
  Spacer,
  GoogleLogin,
  // FacebookLogin,
  modalStyles,
} from "./style";
import NumberFormat from "react-number-format";
import { signInWithGoogle } from "../../services/Firebase";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
// import { signInWithGoogle, signInWithFacebook } from "../../services/Firebase";

export default function AuthenticationModal() {
  const {
    authenticationIsOpen,
    setAuthenticationIsOpen,
    setToken,
    setLoadingUserValidation,
  } = useUserContext();

  const [page, setPage] = useState("entrar");
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [submitIsLoading, setSubmitIsLoading] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  function closeModal() {
    document.body.style.overflow = "unset";
    setAuthenticationIsOpen(false);

    setPage("entrar");
    setIsShowingPassword(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    if (page === "inscrever-se")
      return signUp({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef?.current?.state.value,
        password: passwordRef.current.value,
      });
    if (page === "entrar")
      return signIn({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    if (page === "redefinir senha")
      return sendRecuperationEmail(emailRef.current.value);
  }

  async function signUp(data) {
    const response = await api.signUp(data);
    setSubmitIsLoading(false);

    if (response.status === 201) {
      renderToast("success", "Cadastro realizado com sucesso!");
      setPage("entrar");
      return;
    }

    handleResponseErrors(response);
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

    handleResponseErrors(response);
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

    handleResponseErrors(response);
    return;
  }

  function handleResponseErrors(response) {
    if (response.status === "loginCancelled") return;

    if (response.status === 409) {
      renderToast("error", response.data);
      return;
    }

    if (response.status === 422) {
      renderToast("error", response.data.error);
      return;
    }

    return renderToast(
      "error",
      "Erro no servidor, tente novamente em alguns momentos"
    );
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
            name="name"
            type="text"
            placeholder="Nome completo"
            ref={nameRef}
            required
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          ref={emailRef}
          required
        />
        {page === "inscrever-se" && (
          <NumberFormat
            name="phone"
            placeholder="Número do celular"
            format={"(##) #####-####"}
            ref={phoneRef}
            required
          />
        )}
        {page !== "redefinir senha" && (
          <PasswordContainer>
            <input
              name="password"
              type={isShowingPassword ? "text" : "password"}
              placeholder="Senha"
              ref={passwordRef}
              required
            />

            {isShowingPassword ? (
              <IoEyeOff
                onClick={() => setIsShowingPassword(!isShowingPassword)}
                className="show-hide"
              />
            ) : (
              <IoEye
                onClick={() => setIsShowingPassword(!isShowingPassword)}
                className="show-hide"
              />
            )}
          </PasswordContainer>
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
