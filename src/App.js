import HeaderSection from "./components/HeaderSection"
import ServicesSection from "./components/ServicesSection"
import ContactUsSection from "./components/ContactUsSection"
import './styles/reset.css'
import './styles/style.css'

export default function App() {
    return (
        <>
            <HeaderSection />
            <ServicesSection />
            <ContactUsSection />
        </>
    );
}