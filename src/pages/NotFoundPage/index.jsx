import HeaderSection from "../../components/HeaderSection";
import Footer from "../../components/Footer";
import * as variables from "../../styles/variables";

export default function NotFoundPage() {
  return (
    <>
      <HeaderSection page={"not-found"} title={"Página não encontrada"} />
      <div
        style={{
          background: `${variables.DARK_GREY}`,
          width: "100%",
          height: "100px",
        }}
      />
      <Footer />
    </>
  );
}
