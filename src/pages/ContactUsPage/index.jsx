import HeaderSection from "../../components/HeaderSection";
import ContactInfo from "../../components/ContactInfo";
import GoogleMaps from "../../components/GoogleMaps";
import SendMessage from "../../components/SendMessage";
import { memo } from "react";

function ContactUsPage() {
  return (
    <>
      <HeaderSection page="contact-us" title="Contato" />
      <ContactInfo />
      <GoogleMaps />
      <SendMessage />
    </>
  );
}

export default memo(ContactUsPage);
