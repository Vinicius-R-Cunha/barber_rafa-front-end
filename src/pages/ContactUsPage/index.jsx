import HeaderSection from "../../components/HeaderSection";
import ContactInfo from "../../components/ContactInfo";
import GoogleMaps from "../../components/GoogleMaps";
import SendMessage from "../../components/SendMessage";

export default function ContactUsPage() {
  return (
    <>
      <HeaderSection page="contact-us" title="Contato" />
      <ContactInfo />
      <GoogleMaps />
      <SendMessage />
    </>
  );
}
