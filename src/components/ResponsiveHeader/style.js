import styled from "styled-components";

const Container = styled.div`
    display: none;

    width: 100%;
    height: 90px;

    margin-top: 19px;

    z-index: 1;

    .logo-image-tablet {
        height: 110px;

        margin-left: 0;

        object-fit: cover;

        cursor: pointer;
    }

    @media (max-width: 1150px) {
        display: flex;
        justify-content: space-between;

        .logo-image-tablet {
            height: 120px;
        }
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

    margin-top: 10px;
    margin-right: 35px;

    gap: 14%;

    .tablet-icon {
        margin-left: 10px;

        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 1.825rem;
    }
`;

export { Container, Icons };
