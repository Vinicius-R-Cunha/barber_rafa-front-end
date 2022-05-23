import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 112px 0;

    background-color: #252525;

    .profile-image {
        width: 590px;
        height: 590px;

        object-fit: cover;
    }

    @media (max-width: 1416px) {
        .profile-image {
            width: 400px;
            height: 400px;
        }
    }

    @media (max-width: 767px) {
        padding: 50px 0;

        .profile-image {
            width: 545px;
            height: 545px;
        }
    }

    @media (max-width: 578px) {
        .profile-image {
            width: 99%;
            height: 370px;

            object-fit: cover;
        }
    }

    @media (max-width: 424px) {
        .profile-image {
            width: 99%;
            height: 370px;

            object-fit: cover;
        }
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
        flex-direction: column;
        align-items: center;
    }
`;

const InfoContainer = styled.div`
    width: 700px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        font-family: "Teko";
        font-size: 4.375rem;
        font-weight: 500;
        line-height: 1em;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        color: #e1e1e1;

        padding-bottom: 25px;
    }

    @media (max-width: 1270px) {
        .title {
            font-size: 2.063rem;
        }

        width: auto;
    }

    @media (max-width: 767px) {
        .title {
            font-size: 2.563rem;

            padding-top: 25px;
            padding-bottom: 15px;
        }
    }
`;

const Description = styled.div`
    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75em;
    color: #8d8d8d;

    @media (max-width: 767px) {
        padding-top: 30px;
        padding-bottom: 10px;
    }
`;

const Button = styled.button`
    all: unset;

    width: 280px;
    height: 73px;

    font-weight: 800;
    font-size: 0.875rem;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    color: #e1e1e1;

    margin-top: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    border: 5px solid #96885f;

    z-index: 1;

    cursor: pointer;

    :hover {
        transition: 0.3s ease-out;
        background-color: #96885f;
    }

    @media (max-width: 1100px) {
        width: 260px;
        height: 53px;

        border: 3px solid #96885f;
    }

    @media (max-width: 767px) {
        width: 245px;
        height: 50px;

        margin-top: 40px;
    }

    @media (max-width: 500px) {
        width: 205px;
        height: 40px;

        font-size: 0.675rem;
    }
`;

export { Container, AboutContainer, InfoContainer, Description, Button };
