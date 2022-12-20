import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useUserContext } from "../../contexts/UserContext";
import {
  StyledModal,
  Title,
  Spacer,
  GoogleLogin,
  // FacebookLogin,
  modalStyles,
} from "./style";
import { signInWithGoogle } from "../../services/Firebase";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
// import { signInWithGoogle, signInWithFacebook } from "../../services/Firebase";

export default function AuthenticationModal() {
  const {
    authenticationIsOpen,
    setAuthenticationIsOpen,
    setToken,
    setLoadingUserValidation,
  } = useUserContext();

  const [page, setPage] = useState("entrar");

  function closeModal() {
    document.body.style.overflow = "unset";
    setAuthenticationIsOpen(false);

    setPage("entrar");
  }

  return (
    <StyledModal
      isOpen={authenticationIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      <IoClose className="close-button" onClick={closeModal} />
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
    </StyledModal>
  );
}
