import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0 50px 0;

  background-color: #252525;

  .message {
    font-family: "Montserrat";
    font-size: 1.575rem;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: 0.7px;
    text-align: center;
    color: #e1e1e1;

    margin-top: 50px;
  }

  .margin-top {
    margin-top: 100px;
  }

  @media (max-width: 850px) {
    .message {
      font-size: 1.275rem;
    }
  }

  @media (max-width: 660px) {
    .message {
      font-size: 1.225rem;
    }
  }

  @media (max-width: 424px) {
    .message {
      font-size: 1.075rem;
    }
  }
`;

const Services = styled.div`
  width: 1170px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  padding-top: 80px;

  @media (max-width: 1270px) {
    width: 94%;
  }

  @media (max-width: 1023px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 1023px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 750px) {
    padding-top: 42px;

    grid-template-columns: 1fr;
  }
`;

const Service = styled.div`
  width: 100%;

  padding: 30px 25px 15px 25px;

  font-family: "Montserrat";
  font-size: 1.275rem;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: 0.7px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background-color: #2c2c2c;

  position: relative;

  .remove-icon {
    font-size: 0.9rem;
    color: #ff5a5a;

    background-color: rgba(0, 0, 0, 0.2);

    align-self: flex-end;

    margin-top: 25px;
    padding: 3px 8px;

    border-radius: 4px;

    cursor: pointer;
  }

  .summary {
    text-align: center;
    color: #96885f;

    margin-bottom: 15px;
  }

  .date-time {
    color: #e1e1e1;
  }

  @media (max-width: 1160px) {
    font-size: 1.075rem;
  }

  @media (max-width: 1023px) {
    font-size: 0.975rem;
  }

  @media (max-width: 950px) {
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  all: unset;

  width: 260px;
  height: 70px;

  font-family: "Montserrat";
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: #e1e1e1;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

  border-radius: 4px;
  border: 5px solid #96885f;

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: #96885f;
  }

  .whats-icon {
    font-size: 1.875rem;

    margin-left: 10px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 50px;

    font-size: 0.775rem;

    .whats-icon {
      font-size: 1.475rem;
    }
  }
`;

export { Container, Services, Service, Button };
