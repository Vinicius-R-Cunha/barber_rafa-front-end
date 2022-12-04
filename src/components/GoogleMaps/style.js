import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: ${variables.DARK_GREY};
`;

export const MapContainer = styled.div`
  width: 1170px;

  cursor: pointer;
  @media (max-width: 1175px) {
    width: 90%;
  }
`;
