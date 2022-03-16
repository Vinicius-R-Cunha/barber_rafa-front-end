import HeaderSection from "./components/HeaderSection"
import ScheduleSection from "./components/ScheduleSection"
import ContactUsSection from "./components/ContactUsSection"
import './styles/reset.css'
import './styles/style.css'

export default function App() {
    return (
        <>
            <HeaderSection />
            <ScheduleSection />
            <ContactUsSection />
        </>
    );
}