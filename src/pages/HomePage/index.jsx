import HeaderSection from "../../components/HeaderSection";
import HomeToAboutSection from "../../components/HomeToAboutSection";
import HomeToContactUsSection from "../../components/HomeToContactUsSection";

export default function HomePage() {
  return (
    <>
      <HeaderSection page={"home"} />
      <HomeToAboutSection />
      <HomeToContactUsSection />
    </>
  );
}
