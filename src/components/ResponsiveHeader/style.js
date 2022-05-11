import styled from "styled-components";

const Container = styled.div`
    display: none;

    height: 90px;

    width: 100%;

    margin-top: 12px;

    z-index: 1;

    .logo-image-tablet {
        width: 90px;
        height: 90px;

        margin-left: 28px;

        border-radius: 4px;
        box-shadow: -2px 5px 25px black;

        cursor: pointer;
    }

    @media (max-width: 1100px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 450px) {
        .logo-image-tablet {
            width: 20%;
            height: auto;
        }
    }

    @media (max-width: 330px) {
        .logo-image-tablet {
            width: 23%;
            height: auto;
        }
    }
`;

const Icons = styled.div`
    font-size: 2.2125rem;

    display: flex;

    margin-right: 38px;

    gap: 2%;

    .tablet-icon {
        margin-left: 10px;

        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 1.825rem;
    }
`;

export { Container, Icons };
