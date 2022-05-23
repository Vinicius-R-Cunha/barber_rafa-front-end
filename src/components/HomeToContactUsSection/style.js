import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 112px 0;

    background-color: #252525;

    position: relative;

    .background-image {
        width: 100%;
        height: 100%;

        object-fit: cover;

        opacity: 0.6;

        position: absolute;
        top: 0;
        left: 0;

        z-index: 0;
    }

    .background-darkness {
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.4);

        position: absolute;
        top: 0;
        left: 0;

        z-index: 0;
    }

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

        z-index: 1;
    }

    @media (max-width: 767px) {
        padding: 50px 0;

        .title {
            font-size: 3.563rem;

            padding-top: 25px;
            padding-bottom: 15px;
        }
    }

    @media (max-width: 480px) {
        .title {
            font-size: 2.463rem;
        }
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

    margin-top: 30px;

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

        margin-top: 10px;
        font-size: 0.675rem;
    }
`;

export { Container, Button };
