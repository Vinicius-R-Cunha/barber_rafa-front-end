import HeaderSection from "../../components/HeaderSection";
import ProfileConfigSection from "../../components/ProfileConfigSection";
import DeleteAccountModal from "../../components/DeleteAccountModal";
import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function ProfileConfigPage() {
  const { userIsLoggedIn, loadingUserValidation } = useUserContext();

  const [deleteAccountModalIsOpen, setDeleteAccountModalIsOpen] =
    useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userIsLoggedIn && !loadingUserValidation) {
      navigate("/404");
    }
  }, [loadingUserValidation]);

  return (
    <>
      <HeaderSection page="profile" title="Configurações" />
      <ProfileConfigSection
        setDeleteAccountModalIsOpen={setDeleteAccountModalIsOpen}
      />
      <DeleteAccountModal
        deleteAccountModalIsOpen={deleteAccountModalIsOpen}
        setDeleteAccountModalIsOpen={setDeleteAccountModalIsOpen}
      />
    </>
  );
}
