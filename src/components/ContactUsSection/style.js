import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 112px;

    background-color: #252525;
`;

const InfosContainer = styled.div`
    width: 79%;

    display: flex;
    justify-content: space-between;

    padding-bottom: 112px;
`;

const Info = styled.div`
    width: 370px;
    height: 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #2c2c2c;

    .title {
        font-family: "Teko";
        font-size: 2.188rem;
        font-weight: 500;
        line-height: 2em;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #e1e1e1;

        margin-top: 15px;
    }

    .description {
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
    }
`;

const FormContainer = styled.div`
    width: 79%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 70px;

    .form-title {
        font-family: "Teko";
        font-size: 4.375rem;
        font-weight: 500;
        line-height: 1em;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        color: #e1e1e1;
    }

    span {
        color: #96885f;
    }

    .separator {
        width: 80px;
        height: 2px;

        background-color: #454545;

        margin: 40px 0;
    }

    .form-description {
        font-family: "Montserrat";
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.667em;
        letter-spacing: 0;
        color: #8d8d8d;
        text-align: center;

        margin-bottom: 40px;
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
`;

export { Container, InfosContainer, Info, FormContainer, Button };
