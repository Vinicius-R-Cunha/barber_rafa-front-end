import { About, BookButton } from "./style";
import { memo } from "react";

function Title({ page, title, navTo }) {
  return (
    <>
      {page === "home" ? (
        <>
          <About page={page}>
            Barbearia com ambiente
            <br />
            <span>para toda a família</span>
          </About>

          <BookButton onClick={() => navTo("/servicos")}>
            Agende seu corte
          </BookButton>
        </>
      ) : (
        <About>{title}</About>
      )}
    </>
  );
}

export default memo(Title);
