import HeaderSection from "../../components/HeaderSection";
import AboutSection from "../../components/AboutSection";
import Gallery from "../../components/Gallery";
import CommentsSection from "../../components/CommentsSection";

export default function AboutPage() {
  return (
    <>
      <HeaderSection page="about" title="Sobre" />
      <AboutSection />
      <Gallery />
      <CommentsSection />
    </>
  );
}
