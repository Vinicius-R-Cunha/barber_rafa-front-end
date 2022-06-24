import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 112px 0;

  background-color: #252525;

  @media (max-width: 767px) {
    padding: 50px 0;
  }
`;

const AboutContainer = styled.div`
  display: flex;

  gap: 80px;

  @media (max-width: 1270px) {
    width: 90%;
  }

  @media (max-width: 899px) {
    gap: 50px;
  }

  @media (max-width: 767px) {
    display: unset;
  }
`;

const ProfileImage = styled.img`
  width: 430px;
  height: 590px;

  object-fit: cover;

  @media (max-width: 899px) {
    width: 330px;
    height: 490px;
  }

  @media (max-width: 767px) {
    width: 385px;
    height: 545px;
  }

  @media (max-width: 424px) {
    width: 99%;
    height: 370px;

    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  width: 700px;

  @media (max-width: 1270px) {
    width: auto;
  }
`;

const BarberName = styled.p`
  font-family: "Teko";
  font-size: 3.125rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #e1e1e1;

  padding-bottom: 25px;

  @media (max-width: 767px) {
    font-size: 1.563rem;

    padding-top: 25px;
    padding-bottom: 15px;
  }
`;

const AdressPhone = styled.div`
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75em;
  color: #ffffff;
`;

const Description = styled.div`
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75em;
  color: #8d8d8d;

  padding-top: 50px;

  @media (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 10px;
  }
`;

export {
  Container,
  ProfileImage,
  AboutContainer,
  InfoContainer,
  BarberName,
  AdressPhone,
  Description,
};
