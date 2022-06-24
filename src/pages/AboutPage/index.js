import HeaderSection from "../../components/HeaderSection";
import AboutSection from "../../components/AboutSection";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <HeaderSection page="about" title="Sobre" />
      <AboutSection />
      <Gallery />
      <Footer />
    </>
  );
}
