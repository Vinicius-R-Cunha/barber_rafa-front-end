import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import renderToast from "../../utils/renderToast";
import { ThreeDots } from "react-loader-spinner";
import {
  Container,
  Title,
  InputsForm,
  PasswordContainer,
  Input,
  Button,
} from "./style";
import * as api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordForm({ hash }) {
  const navigate = useNavigate();

  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [isShowingPasswordConfirmation, setIsShowingPasswordConfirmation] =
    useState(false);

  const [submitIsLoading, setSubmitIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    passwordConfirmation: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitIsLoading(true);

    return resetPassword();
  }

  async function resetPassword() {
    const response = await api.resetPassword(hash, formData);
    setSubmitIsLoading(false);

    if (response.status === 200) {
      navigate("/");
      renderToast("success", "Senha alterada com sucesso!");
      return;
    }

    handleResponseErrors(response);
    return;
  }

  function handleResponseErrors(response) {
    if (response.status === 422) {
      renderToast("error", response.data.error);
      return;
    }

    if (response.data) {
      renderToast("error", response.data);
      return;
    }

    return;
  }

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Title>Redefinir senha</Title>
      <InputsForm>
        <PasswordContainer>
          <Input
            name="password"
            type={isShowingPassword ? "text" : "password"}
            placeholder="senha"
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

        <PasswordContainer>
          <Input
            name="passwordConfirmation"
            type={isShowingPasswordConfirmation ? "text" : "password"}
            placeholder="confirme sua senha"
            onChange={(e) => handleFormData(e)}
            value={formData.passwordConfirmation}
            required
          />

          {isShowingPasswordConfirmation ? (
            <IoEyeOff
              onClick={() =>
                setIsShowingPasswordConfirmation(!isShowingPasswordConfirmation)
              }
              className="show-hide"
            />
          ) : (
            <IoEye
              onClick={() =>
                setIsShowingPasswordConfirmation(!isShowingPasswordConfirmation)
              }
              className="show-hide"
            />
          )}
        </PasswordContainer>

        {submitIsLoading ? (
          <Button type="button" disabled>
            <ThreeDots color="#E1E1E1" height={13} width={51} />
          </Button>
        ) : (
          <Button onClick={(e) => handleSubmit(e)}>Recuperar</Button>
        )}
      </InputsForm>
    </Container>
  );
}
