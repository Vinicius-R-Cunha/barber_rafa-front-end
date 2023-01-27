import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import {
  Title,
  Spacer,
  GoogleLogin,
  // FacebookLogin,
  modalStyles,
} from "./style";
import Modal from "../Modal";
import { signInWithGoogle } from "../../services/Firebase";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useAuthModalContext } from "../../contexts/AuthModalContext";
// import { signInWithGoogle, signInWithFacebook } from "../../services/Firebase";

export default function AuthenticationModal() {
  const { setToken, setLoadingUserValidation } = useUserContext();
  const { authenticationIsOpen, setAuthenticationIsOpen } =
    useAuthModalContext();

  const [page, setPage] = useState("entrar");

  function closeModal() {
    document.body.style.overflow = "unset";
    setAuthenticationIsOpen(false);

    setPage("entrar");
  }

  return (
    <Modal
      isOpen={authenticationIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      <Title>{page}</Title>
      {page === "redefinir senha" && (
        <ResetPassword closeModal={closeModal} setPage={setPage} />
      )}
      {page === "entrar" && (
        <SignIn closeModal={closeModal} setPage={setPage} />
      )}
      {page === "inscrever-se" && <SignUp setPage={setPage} />}

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
    </Modal>
  );
}
