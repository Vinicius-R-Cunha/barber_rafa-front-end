import { useState } from "react";
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
import { ThreeDots } from "react-loader-spinner";
import NumberFormat from "react-number-format";
import { signInWithGoogle } from "../../services/Firebase";
import renderToast from "../../utils/renderToast";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  function closeModal() {
    document.body.style.overflow = "unset";
    setAuthenticationIsOpen(false);

    setPage("entrar");
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
    setIsShowingPassword(false);
  }

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    if (page === "inscrever-se") return signUp();
    if (page === "entrar") return signIn();
    if (page === "redefinir senha") return sendRecuperationEmail();
  }

  async function signUp() {
    const response = await api.signUp(formData);
    setSubmitIsLoading(false);

    if (response.status === 201) {
      renderToast("success", "Cadastro realizado com sucesso!");
      setPage("entrar");
      return;
    }

    handleResponseErrors(response);
    return;
  }

  async function signIn() {
    const signInObject = {
      email: formData.email,
      password: formData.password,
    };
    const response = await api.signIn(signInObject);
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

  async function sendRecuperationEmail() {
    const { email } = formData;
    const response = await api.sendRecuperationEmail(email);
    setSubmitIsLoading(false);

    if (response.status === 200) {
      renderToast("success", `Email de recuperação enviado para ${email}`);
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
            onChange={(e) => handleFormData(e)}
            value={formData.name}
            required
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={(e) => handleFormData(e)}
          value={formData.email}
          required
        />
        {page === "inscrever-se" && (
          <NumberFormat
            name="phone"
            placeholder="Número do celular"
            onChange={(e) => handleFormData(e)}
            format={"(##) #####-####"}
            value={formData.phone}
            required
          />
        )}
        {page !== "redefinir senha" && (
          <PasswordContainer>
            <input
              name="password"
              type={isShowingPassword ? "text" : "password"}
              placeholder="Senha"
              onChange={(e) => handleFormData(e)}
              value={formData.password}
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
              <ThreeDots color="#E1E1E1" height={13} width={51} />
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
