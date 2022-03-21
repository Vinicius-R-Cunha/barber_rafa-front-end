import HeaderSection from "./components/HeaderSection"
import ScheduleSection from "./components/ScheduleSection"
import ContactUsSection from "./components/ContactUsSection"
import SecuritySection from "./components/SecuritySection"
import ServicesSection from "./components/ServicesSection"
import './styles/reset.css'
import './styles/style.css'

export default function App() {
    return (
        <>
            <HeaderSection />
            <SecuritySection />
            <ScheduleSection />
            <ServicesSection />
            <ContactUsSection />
        </>
    );
}