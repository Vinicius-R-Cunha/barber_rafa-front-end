import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import {
  Container,
  Title,
  InputContainer,
  FieldName,
  Input,
  StyledNumberFormat,
  Action,
  DeleteAccount,
} from "./style";
import handleApiErrors from "../../utils/handleApiErrors";

export default function ProfileConfigSection({ setDeleteAccountModalIsOpen }) {
  const { userData, setUserData, token } = useUserContext();

  const [change, setChange] = useState("");
  const [name, setName] = useState("");
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

      if (field === "phone") {
        const response = await api.updateUser(token, { phone }, "phone");
        if (response.status === 200) setUserData({ ...userData, phone });
        handleResponse(response);
        return;
      }

      return;
    }

    setName("");
    setPhone("");
    setChange(field);
  }

  async function sendRecuperationEmail() {
    const response = await api.sendRecuperationEmail(userData?.email);

    if (response.status === 200) {
      renderToast(
        "success",
        `Email de recuperação enviado para ${userData?.email}`
      );
      return;
    }

    handleResponse(response);
    return;
  }

  function handleResponse(response) {
    setIsLoading(false);
    setName("");
    setPhone("");

    if (response.status === 200) {
      renderToast("success", "Alterado com sucesso!");
      return;
    }

    handleApiErrors(response);
    return;
  }

  function openConfirmation() {
    setDeleteAccountModalIsOpen(true);
    document.body.style.overflow = "hidden";
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
          {change === "name"
            ? isLoading
              ? renderDotsLoading()
              : "Salvar"
            : "Alterar"}
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
          {change === "phone"
            ? isLoading
              ? renderDotsLoading()
              : "Salvar"
            : "Alterar"}
        </Action>
      </InputContainer>
      <InputContainer>
        <FieldName>Senha</FieldName>
        <Input placeholder="Alterar senha" disabled />
        <Action onClick={() => sendRecuperationEmail()}>Alterar</Action>
      </InputContainer>

      <InputContainer>
        <DeleteAccount onClick={() => openConfirmation()}>
          Excluir conta
        </DeleteAccount>
      </InputContainer>
    </Container>
  );
}
