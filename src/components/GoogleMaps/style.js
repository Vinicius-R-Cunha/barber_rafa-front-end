import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: #252525;
`;

export const MapContainer = styled.div`
  width: 1170px;

  cursor: pointer;
  @media (max-width: 1175px) {
    width: 90%;
  }
`;
