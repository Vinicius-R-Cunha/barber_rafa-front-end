import { useRef, useState } from "react";
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
  Action,
  DeleteAccount,
} from "./style";
import handleApiErrors from "../../utils/handleApiErrors";
import PhoneNumberInput from "../PhoneNumberInput";

export default function ProfileConfigSection({ setDeleteAccountModalIsOpen }) {
  const { userData, setUserData, token } = useUserContext();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const [change, setChange] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function changeInformation(field) {
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const input = field === "name" ? name : phone;
    nameRef.current.value = "";
    phoneRef.current.value = "";

    if (change !== field) return setChange(field);

    setChange("");

    setIsLoading(true);
    const response = await api.updateUser(token, { [field]: input }, field);
    setIsLoading(false);

    if (response.status === 200) {
      setUserData({ ...userData, [field]: input });
      renderToast("success", "Alterado com sucesso!");
      return;
    }

    handleApiErrors(response);
    return;
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
          ref={nameRef}
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
        <PhoneNumberInput
          placeholder={change === "phone" ? "" : userData?.phone}
          reference={phoneRef}
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
        <Action onClick={sendRecuperationEmail}>Alterar</Action>
      </InputContainer>

      <InputContainer>
        <DeleteAccount onClick={openConfirmation}>Excluir conta</DeleteAccount>
      </InputContainer>
    </Container>
  );
}
