import HeaderSection from "../../components/HeaderSection";
import Footer from "../../components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <HeaderSection page={"not-found"} title={"Página não encontrada"} />
      <div style={{ background: "#252525", width: "100%", height: "100px" }} />
      <Footer />
    </>
  );
}
