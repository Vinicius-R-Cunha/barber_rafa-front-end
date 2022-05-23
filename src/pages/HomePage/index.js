import HeaderSection from "../../components/HeaderSection";
import HomeToAboutSection from "../../components/HomeToAboutSection";
import HomeToContactUsSection from "../../components/HomeToContactUsSection";
import Footer from "../../components/Footer";

export default function HomePage() {
    return (
        <>
            <HeaderSection page={"home"} />
            <HomeToAboutSection />
            <HomeToContactUsSection />
            <Footer />
        </>
    );
}
