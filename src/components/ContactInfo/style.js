import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 112px;

  background-color: #252525;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const InfosContainer = styled.div`
  width: 1170px;

  display: flex;
  justify-content: space-between;

  padding-bottom: 50px;

  @media (max-width: 1170px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    gap: 30px;
  }
`;

export const Info = styled.div`
  width: 31.6%;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #2c2c2c;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    padding: 15px 0;
  }
`;

export const Image = styled.img``;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 2.188rem;
  font-weight: 500;
  line-height: 2em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #e1e1e1;

  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 1.063rem;
  }
`;

export const Description = styled.p`
  height: 60px;

  font-family: "Montserrat";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.667em;
  letter-spacing: 0;
  color: #8d8d8d;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
