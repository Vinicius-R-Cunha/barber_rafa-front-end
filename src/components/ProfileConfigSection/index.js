import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import {
  Container,
  Title,
  InputContainer,
  FieldName,
  Input,
  StyledNumberFormat,
  Action,
  toastStyles,
} from "./style";

export default function ProfileConfigSection() {
  const { userData, setUserData, token } = useContext(UserContext);

  const [change, setChange] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function changeInformation(field) {
    if (change === field) {
      setIsLoading(true);
      setChange("");
      if (field === "name") {
        const response = await api.updateUser(token, { name }, "name");
        if (response.status === 200) setUserData({ ...userData, name });

        handleResponse(response);
        return;
      }

      if (field === "email") {
        const response = await api.updateUser(token, { email }, "email");
        if (response.status === 200) setUserData({ ...userData, email });
        handleResponse(response);
        return;
      }

      if (field === "phone") {
        const response = await api.updateUser(token, { phone }, "phone");
        if (response.status === 200) setUserData({ ...userData, phone });
        handleResponse(response);
        return;
      }

      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setChange(field);
  }

  async function sendRecuperationEmail() {
    const response = await api.sendRecuperationEmail(userData?.email);

    if (response.status === 200) {
      toast.success(
        `Email de recuperação enviado para ${userData?.email}`,
        toastStyles
      );
      return;
    }

    handleResponse(response);
    return;
  }

  function handleResponse(response) {
    setIsLoading(false);
    setName("");
    setEmail("");
    setPhone("");
    if (response.status === 200) {
      toast.success("Alterado com sucesso!", toastStyles);
      return;
    }

    if (response.status === 409) {
      toast.error(response.data, toastStyles);
      return;
    }

    if (response.status === 422) {
      toast.error(response.data.error, toastStyles);
      return;
    }

    toast.error(
      "Erro no servidor, tente novamente em alguns momentos",
      toastStyles
    );
    return;
  }

  return (
    <Container>
      <Title>Detalhes da conta</Title>
      <InputContainer>
        <FieldName>Nome</FieldName>
        <Input
          placeholder={change === "name" ? "" : userData?.name}
          onChange={(e) => setName(e.target.value)}
          value={name}
          disabled={change === "name" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("name")}>
          {change === "name" ? (
            isLoading ? (
              <ThreeDots color="#E1E1E1" height={13} width={51} />
            ) : (
              "Salvar"
            )
          ) : (
            "Alterar"
          )}
        </Action>
      </InputContainer>
      <InputContainer>
        <FieldName>E-mail</FieldName>
        <Input
          placeholder={change === "email" ? "" : userData?.email}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={change === "email" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("email")}>
          {change === "email" ? (
            isLoading ? (
              <ThreeDots color="#E1E1E1" height={13} width={51} />
            ) : (
              "Salvar"
            )
          ) : (
            "Alterar"
          )}
        </Action>
      </InputContainer>
      <InputContainer>
        <FieldName>Celular</FieldName>
        <StyledNumberFormat
          placeholder={change === "phone" ? "" : userData?.phone}
          onChange={(e) => setPhone(e.target.value)}
          format={"(##) #####-####"}
          value={phone}
          disabled={change === "phone" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("phone")}>
          {change === "phone" ? (
            isLoading ? (
              <ThreeDots color="#E1E1E1" height={13} width={51} />
            ) : (
              "Salvar"
            )
          ) : (
            "Alterar"
          )}
        </Action>
      </InputContainer>
      <InputContainer>
        <FieldName>Senha</FieldName>
        <Input placeholder="Alterar senha" disabled />
        <Action onClick={() => sendRecuperationEmail()}>Alterar</Action>
      </InputContainer>
    </Container>
  );
}
