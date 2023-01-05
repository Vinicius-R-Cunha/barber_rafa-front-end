import { Container, BackgroundImage, BackgroundDarkness } from "./style";
import { useNavigate } from "react-router-dom";
import background from "../../assets/colored_lion.png";
import { useCallback, useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import ResponsiveHeader from "../ResponsiveHeader";
import DesktopHeader from "./DesktopHeader";
import Title from "./Title";
import { useAuthModalContext } from "../../contexts/AuthModalContext";

export default function HeaderSection({ page, title }) {
  const {
    token,
    setToken,
    validateToken,
    userIsLoggedIn,
    userIsAdmin,
    loadingUserValidation,
  } = useUserContext();

  const { openAuthenticationModal } = useAuthModalContext();

  const [profileTabIsOpen, setProfileTabIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    validateToken(token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const navTo = useCallback((page) => {
    setProfileTabIsOpen(false);
    navigate(page);
  }, []);

  const logout = useCallback(() => {
    navigate("/");
    setProfileTabIsOpen(false);
    localStorage.removeItem("token");
    setToken(null);
  }, []);

  return (
    <Container page={page}>
      <BackgroundImage src={background} alt="" />
      <BackgroundDarkness />

      <ResponsiveHeader
        openAuthenticationModal={openAuthenticationModal}
        navTo={navTo}
        loadingUserValidation={loadingUserValidation}
        userIsLoggedIn={userIsLoggedIn}
        userIsAdmin={userIsAdmin}
        profileTabIsOpen={profileTabIsOpen}
        setProfileTabIsOpen={setProfileTabIsOpen}
        logout={logout}
      />

      <DesktopHeader
        openAuthenticationModal={openAuthenticationModal}
        navTo={navTo}
        userIsLoggedIn={userIsLoggedIn}
        userIsAdmin={userIsAdmin}
        loadingUserValidation={loadingUserValidation}
        profileTabIsOpen={profileTabIsOpen}
        setProfileTabIsOpen={setProfileTabIsOpen}
        logout={logout}
      />

      <Title page={page} title={title} navTo={navTo} />
    </Container>
  );
}
