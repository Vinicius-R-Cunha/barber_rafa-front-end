import styled from "styled-components";

const Container = styled.div`
    display: none;

    width: 100%;

    margin-top: 12px;

    z-index: 1;

    .logo-image-tablet {
        width: 130px;
        height: 130px;

        margin-left: 28px;

        border-radius: 50%;
        box-shadow: -2px 5px 25px black;

        cursor: pointer;
    }

    @media (max-width: 1100px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Icons = styled.div`
    font-size: 35px;

    margin-right: 38px;

    .tablet-icon {
        margin-left: 25px;

        cursor: pointer;
    }
`;

export { Container, Icons };
