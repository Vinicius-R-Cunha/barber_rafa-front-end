import styled from "styled-components";

const Container = styled.div`
  font-size: 1.725rem;
  color: #e1e1e1;

  margin: 35px 0 52px;

  display: flex;

  gap: 15px;

  z-index: 1;

  .icon {
    padding: 10px;

    border-radius: 4px;
    border: 4px solid #96885f;

    cursor: pointer;

    :hover {
      transition: 0.3s ease-out;
      background-color: #96885f;
    }
  }

  @media (max-width: 1100px) {
    font-size: 1.525rem;

    margin: 23px 0 38px;
  }

  @media (max-width: 767px) {
    font-size: 1.225rem;

    margin: 20px 0 30px;
  }

  @media (max-width: 500px) {
    font-size: 1.025rem;

    margin: 10px 0 19px;
  }
`;

export { Container };
