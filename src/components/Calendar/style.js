import styled from "styled-components";

export const Container = styled.div`
  .c1 {
    box-sizing: unset;
    padding: 10px;
    border-radius: 8px;
  }

  @media (max-width: 372px) {
    .c1 {
      width: 318px;
    }
  }

  @media (max-width: 340px) {
    .c1 {
      width: 298px;
    }
  }
`;
