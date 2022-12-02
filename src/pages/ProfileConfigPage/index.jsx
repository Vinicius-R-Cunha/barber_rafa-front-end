import HeaderSection from "../../components/HeaderSection";
import Footer from "../../components/Footer";
import ProfileConfigSection from "../../components/ProfileConfigSection";
import DeleteAccountModal from "../../components/DeleteAccountModal";
import { useState } from "react";

export default function ProfileConfigPage() {
  const [deleteAccountModalIsOpen, setDeleteAccountModalIsOpen] =
    useState(false);

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
      <Footer />
    </>
  );
}
