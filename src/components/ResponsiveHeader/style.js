import styled from "styled-components";

const Container = styled.div`
    display: none;

    height: 90px;

    width: 100%;

    margin-top: 19px;

    z-index: 1;

    .logo-image-tablet {
        height: 110px;

        margin-left: 23px;

        cursor: pointer;
    }

    @media (max-width: 1150px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 450px) {
        .logo-image-tablet {
            height: 100%;
        }
    }

    @media (max-width: 330px) {
        .logo-image-tablet {
            height: 100%;
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
