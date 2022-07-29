import HeaderSection from "../../components/HeaderSection";
import Footer from "../../components/Footer";
import ProfileConfigSection from "../../components/ProfileConfigSection";

export default function ProfileConfigPage() {
  return (
    <>
      <HeaderSection page="profile" title="Configurações" />
      <ProfileConfigSection />
      <Footer />
    </>
  );
}
