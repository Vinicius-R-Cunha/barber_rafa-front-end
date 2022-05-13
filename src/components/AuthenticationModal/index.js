import { useContext, useState } from "react";
import { IoEye, IoEyeOff, IoClose } from "react-icons/io5";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import {
    StyledModal,
    Spacer,
    FacebookButton,
    InputsForm,
    LinkButtonDiv,
    modalStyles,
} from "./style";

export default function AuthenticationModal() {
    const { authenticationIsOpen, setAuthenticationIsOpen, setToken } =
        useContext(UserContext);

    const [page, setPage] = useState("entrar");
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    const [isShowingConfirmationPassword, setIsShowingConfirmationPassword] =
        useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: "",
    });

    function closeModal() {
        document.body.style.overflow = "unset";
        setAuthenticationIsOpen(false);
        setPage("entrar");
        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
            passwordConfirmation: "",
        });
        setIsShowingPassword(false);
        setIsShowingConfirmationPassword(false);
    }

    function handleFormData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (page === "inscrever-se") {
            const promise = await api.signUp(formData);
            if (promise) {
                closeModal();
            }
        } else {
            delete formData.name;
            delete formData.phone;
            delete formData.passwordConfirmation;
            const token = await api.signIn(formData);
            if (token) {
                localStorage.setItem("token", token);
                setToken(token);
                closeModal();
            }
        }
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
                        placeholder="Nome"
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
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Número de telefone"
                        onChange={(e) => handleFormData(e)}
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
                            onClick={() =>
                                setIsShowingPassword(!isShowingPassword)
                            }
                            className="show-hide"
                        />
                    ) : (
                        <IoEye
                            onClick={() =>
                                setIsShowingPassword(!isShowingPassword)
                            }
                            className="show-hide"
                        />
                    )}
                </div>
                {page === "inscrever-se" && (
                    <div className="password">
                        <input
                            name="passwordConfirmation"
                            type={
                                isShowingConfirmationPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Confirme sua senha"
                            onChange={(e) => handleFormData(e)}
                            value={formData.passwordConfirmation}
                            required
                        />
                        {isShowingConfirmationPassword ? (
                            <IoEyeOff
                                onClick={() =>
                                    setIsShowingConfirmationPassword(
                                        !isShowingConfirmationPassword
                                    )
                                }
                                className="show-hide"
                            />
                        ) : (
                            <IoEye
                                onClick={() =>
                                    setIsShowingConfirmationPassword(
                                        !isShowingConfirmationPassword
                                    )
                                }
                                className="show-hide"
                            />
                        )}
                    </div>
                )}

                <LinkButtonDiv>
                    {page === "inscrever-se" ? (
                        <>
                            <p onClick={() => setPage("entrar")}>
                                Já possuo cadastro
                            </p>
                            <button onClick={(e) => handleSubmit(e)}>
                                cadastrar
                            </button>
                        </>
                    ) : (
                        <>
                            <p onClick={() => setPage("inscrever-se")}>
                                Não possuo cadastro
                            </p>
                            <button onClick={(e) => handleSubmit(e)}>
                                entrar
                            </button>
                        </>
                    )}
                </LinkButtonDiv>

                <Spacer>
                    <div></div> ou <div></div>
                </Spacer>
                <FacebookButton type="button">
                    Entrar com o Facebook
                </FacebookButton>
            </InputsForm>
        </StyledModal>
    );
}
