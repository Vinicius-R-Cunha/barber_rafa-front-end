import styled from "styled-components";

const Container = styled.div`
    display: none;

    width: 100%;
    height: 90px;

    margin-top: 19px;

    position: relative;

    z-index: 2;

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
    display: flex;

    margin-top: 10px;
    margin-right: 35px;

    .tablet-icon {
        font-size: 2.0125rem;

        margin-left: 20px;

        cursor: pointer;
    }

    @media (max-width: 768px) {
        .tablet-icon {
            font-size: 1.6rem;

            margin-left: 15px;
        }
    }
`;

const MenuContainer = styled.div`
    width: 100%;

    background-color: #252525;

    position: absolute;
    top: 70px;

    box-shadow: -2px 5px 15px rgba(0, 0, 0, 0.7);
`;

const NavButton = styled.div`
    width: 100%;

    font-family: "Montserrat";
    font-size: 1rem;
    font-weight: 400;
    color: #e1e1e1;

    box-sizing: border-box;
    padding: 19px;
`;

export { Container, Icons, MenuContainer, NavButton };
