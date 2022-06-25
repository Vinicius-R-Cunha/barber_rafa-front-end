import HeaderSection from "../../components/HeaderSection";
import ContactInfo from "../../components/ContactInfo";
import PigeonMap from "../../components/PigeonMap";
import SendMessage from "../../components/SendMessage";
import Footer from "../../components/Footer";

export default function ContactUsPage() {
  return (
    <>
      <HeaderSection page="contact-us" title="Contato" />
      <ContactInfo />
      <PigeonMap />
      <SendMessage />
      <Footer />
    </>
  );
}
