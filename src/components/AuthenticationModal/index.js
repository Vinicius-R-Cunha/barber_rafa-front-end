import { useContext, useState } from "react";
import { IoEye, IoEyeOff, IoClose } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  Title,
  InputsForm,
  PasswordContainer,
  LinkButtonDiv,
  modalStyles,
  toastStyles,
  // Spacer,
  // FacebookButton,
} from "./style";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import NumberFormat from "react-number-format";

export default function AuthenticationModal() {
  const { authenticationIsOpen, setAuthenticationIsOpen, setToken } =
    useContext(UserContext);

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
  }

  async function signUp() {
    const response = await api.signUp(formData);
    setSubmitIsLoading(false);

    if (response.status === 201) {
      toast.success("Cadastro realizado com sucesso!", toastStyles);
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
      toast.success("Login efetuado!", toastStyles);
      return;
    }

    handleResponseErrors(response);
    return;
  }

  function handleResponseErrors(response) {
    if (response.status === 409) {
      toast.error(response.data, toastStyles);
      return;
    }

    if (response.status === 422) {
      toast.error(response.data.error, toastStyles);
      return;
    }

    return toast.error(
      "Erro no servidor, tente novamente em alguns momentos",
      toastStyles
    );
  }

  function changePage() {
    if (page === "inscrever-se") return setPage("entrar");
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

        <LinkButtonDiv>
          <p onClick={changePage}>
            {page === "entrar" ? "Não" : "Já"} possuo cadastro
          </p>

          {submitIsLoading ? (
            <button type="button" disabled>
              <ThreeDots color="#E1E1E1" height={13} width={51} />
            </button>
          ) : (
            <button onClick={(e) => handleSubmit(e)}>
              {page === "entrar" ? "entrar" : "cadastrar"}
            </button>
          )}
        </LinkButtonDiv>

        {/* <Spacer>
                    <div></div> ou <div></div>
                </Spacer>
                <FacebookButton type="button">
                    Entrar com o Facebook
                </FacebookButton> */}
      </InputsForm>
    </StyledModal>
  );
}
