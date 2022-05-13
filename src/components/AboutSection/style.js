import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 112px 0;

    gap: 80px;

    background-color: #252525;

    .profile-image {
        width: 430px;
        height: 590px;

        object-fit: cover;
    }
`;

const InfoContainer = styled.div`
    width: 700px;
    height: 530px;

    .barber-name {
        font-family: "Teko";
        font-size: 3.125rem;
        font-weight: 500;
        line-height: 1em;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #e1e1e1;

        padding-bottom: 25px;
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
`;

export { Container, InfoContainer, AdressPhone, Description };
