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
import { memo } from "react";

function ProfileConfigSection({ setDeleteAccountModalIsOpen }) {
  const { userData, setUserData, token } = useUserContext();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const [changingField, setChangingField] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function changeInformation(field) {
    if (changingField !== field) return setChangingField(field);

    setChangingField("");

    const input =
      field === "name" ? nameRef.current.value : phoneRef.current.value;
    nameRef.current.value = "";
    phoneRef.current.value = "";

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

  function renderButton(field) {
    if (changingField === field) {
      if (isLoading) return renderDotsLoading();
      return "Salvar";
    }

    return "Alterar";
  }

  return (
    <Container>
      <Title>Detalhes da conta</Title>
      <InputContainer>
        <FieldName>Nome</FieldName>
        <Input
          placeholder={changingField === "name" ? "" : userData?.name}
          ref={nameRef}
          disabled={changingField === "name" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("name")}>
          {renderButton("name")}
        </Action>
      </InputContainer>
      <InputContainer>
        <FieldName>Celular</FieldName>
        <PhoneNumberInput
          placeholder={changingField === "phone" ? "" : userData?.phone}
          reference={phoneRef}
          disabled={changingField === "phone" && !isLoading ? false : true}
        />
        <Action onClick={() => changeInformation("phone")}>
          {renderButton("phone")}
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

export default memo(ProfileConfigSection);
