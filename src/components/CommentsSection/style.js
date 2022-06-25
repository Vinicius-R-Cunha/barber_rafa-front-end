import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 50px;

  background-color: #252525;
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 4.375rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #96885f;

  @media (max-width: 768px) {
    font-size: 2.375rem;
  }

  @media (max-width: 400px) {
    font-size: 2.075rem;
  }
`;

export const Spacer = styled.div`
  width: 80px;
  height: 2px;

  background-color: #454545;

  margin-top: 40px;

  @media (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export const StyledScrollContainer = styled(ScrollContainer)`
  width: 90%;
  max-width: 1300px;

  display: flex;

  cursor: ${(props) => props.cursorStyle};
`;

export const Comment = styled.div`
  width: 33.3333%;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 0 0 auto;

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const Quote = styled.img`
  width: 23px;
  height: 23px;
`;

export const Description = styled.p`
  width: 90%;

  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75em;
  text-align: center;
  color: #8d8d8d;

  padding-top: 20px;

  @media (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 10px;
  }
`;

export const Author = styled.p`
  font-family: "Montserrat";
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #96885f;

  padding-top: 20px;

  @media (max-width: 1023px) {
    font-size: 0.675rem;
  }
`;
