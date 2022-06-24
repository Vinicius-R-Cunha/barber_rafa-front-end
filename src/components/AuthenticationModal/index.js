import { useContext, useState } from "react";
import { IoEye, IoEyeOff, IoClose } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
  StyledModal,
  InputsForm,
  LinkButtonDiv,
  modalStyles,
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

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    if (page === "inscrever-se") {
      const promise = await api.signUp(formData);
      setSubmitIsLoading(false);
      if (promise.status === 201) {
        toastSuccess("Cadastro realizado com sucesso!");
        setPage("entrar");
        return;
      } else if (promise.status === 409) {
        toastError(promise.data);
        return;
      } else if (promise.status === 422) {
        toastError(promise.data.error);
        return;
      }
      toastError("Erro no servidor, tente novamente em alguns momentos");
      return;
    } else {
      const signInObject = {
        email: formData.email,
        password: formData.password,
      };
      const promise = await api.signIn(signInObject);
      setSubmitIsLoading(false);
      if (promise.status === 200) {
        localStorage.setItem("token", promise.data);
        setToken(promise.data);
        closeModal();
        toastSuccess("Login efetuado!");
        return;
      } else if (promise.status === 409) {
        toastError(promise.data);
        return;
      } else if (promise.status === 422) {
        toastError(promise.data.error);
        return;
      }
      toastError("Erro no servidor, tente novamente em alguns momentos");
      return;
    }
  }

  function toastError(message) {
    return toast.error(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function toastSuccess(message) {
    return toast.success(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <StyledModal
      isOpen={authenticationIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <IoClose className="close-button" onClick={() => closeModal()} />
      <p className="title">{page}</p>
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

        <div className="password">
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
        </div>

        <LinkButtonDiv>
          {page === "inscrever-se" ? (
            <>
              <p onClick={() => setPage("entrar")}>Já possuo cadastro</p>
              {submitIsLoading ? (
                <button type="button">
                  <ThreeDots color="#E1E1E1" height={13} width={51} />
                </button>
              ) : (
                <button onClick={(e) => handleSubmit(e)}>cadastrar</button>
              )}
            </>
          ) : (
            <>
              <p onClick={() => setPage("inscrever-se")}>Não possuo cadastro</p>
              {submitIsLoading ? (
                <button type="button">
                  <ThreeDots color="#E1E1E1" height={13} width={51} />
                </button>
              ) : (
                <button onClick={(e) => handleSubmit(e)}>entrar</button>
              )}
            </>
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
