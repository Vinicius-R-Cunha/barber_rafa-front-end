import { Container, BackgroundImage, BackgroundDarkness } from "./style";
import { useNavigate } from "react-router-dom";
import background from "../../assets/colored_lion.png";
import { useCallback, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import ResponsiveHeader from "../ResponsiveHeader";
import DesktopHeader from "./DesktopHeader";
import Title from "./Title";

export default function HeaderSection({ page, title }) {
  const {
    setToken,
    openAuthenticationModal,
    userIsLoggedIn,
    userIsAdmin,
    loadingUserValidation,
  } = useUserContext();

  const [profileTabIsOpen, setProfileTabIsOpen] = useState(false);

  const navigate = useNavigate();

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
