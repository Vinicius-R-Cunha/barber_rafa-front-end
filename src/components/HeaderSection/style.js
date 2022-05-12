import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: ${(props) => (props.page === "home" ? "100vh" : "60vh")};

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #ffffff;

    background-color: rgba(0, 0, 0, 1);
    position: relative;

    z-index: 1;

    .background-image {
        width: 100%;
        height: 100%;

        object-fit: cover;

        opacity: 0.6;

        position: absolute;
        top: 0;
        left: 0;

        z-index: -3;
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

    @media (max-width: 1100px) {
        height: ${(props) => (props.page === "home" ? "570px" : "450px")};
    }

    @media (max-width: 768px) {
        height: ${(props) => (props.page === "home" ? "500px" : "320px")};
    }

    @media (max-width: 390px) {
        height: ${(props) => (props.page === "home" ? "430px" : "300px")};
    }
`;

const HeaderDiv = styled.div`
    width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 23px;

    z-index: 1;

    .logo-image {
        height: 170px;

        cursor: pointer;
    }

    @media (max-width: 1300px) {
        width: 95%;
    }

    @media (max-width: 1150px) {
        display: none;
    }
`;

const NavButtons = styled.div`
    display: flex;
    align-items: center;
`;

const NavButton = styled.div`
    font-size: 1.163rem;
    letter-spacing: 0px;
    font-weight: 400;
    line-height: 1.176em;

    display: flex;
    align-items: center;

    margin: 0 30px;

    cursor: pointer;

    :hover {
        color: #96885f;
        transition: 0.1s ease-in-out;
    }

    :last-of-type {
        margin-right: 0;
    }

    .login-icon {
        font-size: 2.3125rem;

        margin-right: -20px;
        margin-bottom: 2px;

        cursor: pointer;
    }
`;

const About = styled.div`
    font-family: "Teko";
    font-size: 5.625rem;
    font-weight: 500;
    line-height: 1em;
    letter-spacing: 2.2px;
    text-align: center;
    text-transform: uppercase;
    color: #e1e1e1;

    margin-top: ${(props) => (props.page === "home" ? "12%" : "9%")};

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 1;

    span {
        color: #96885f;
    }

    @media (max-width: 1100px) {
        font-size: 4.375rem;

        margin-top: ${(props) => (props.page === "home" ? "9%" : "15%")};
    }

    @media (max-width: 768px) {
        font-size: 2.825rem;

        margin-top: ${(props) => (props.page === "home" ? "9%" : "10%")};
    }

    @media (max-width: 610px) {
        font-size: 2.825rem;

        margin-top: ${(props) => (props.page === "home" ? "9%" : "15%")};
    }

    @media (max-width: 390px) {
        font-size: 2.125rem;
    }
`;

const SocialIcons = styled.div`
    font-size: 2.025rem;
    color: #e1e1e1;

    margin: 35px 0 52px;

    display: flex;

    gap: 15px;

    z-index: 1;

    .icon {
        padding: 5px;

        border-radius: 4px;

        background-color: #96885f;

        cursor: pointer;
    }

    @media (max-width: 1100px) {
        font-size: 1.525rem;

        margin: 23px 0 38px;
    }

    @media (max-width: 768px) {
        font-size: 1.225rem;

        margin: 20px 0 30px;
    }

    @media (max-width: 390px) {
        font-size: 1.025rem;
    }
`;

const BookButton = styled.button`
    all: unset;

    width: 280px;
    height: 73px;

    font-weight: 800;
    font-size: 0.875rem;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    color: #e1e1e1;

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

    @media (max-width: 768px) {
        width: 245px;
        height: 50px;
    }

    @media (max-width: 390px) {
        width: 205px;
        height: 40px;

        font-size: 0.675rem;
    }
`;

export {
    Container,
    HeaderDiv,
    BookButton,
    About,
    NavButtons,
    NavButton,
    SocialIcons,
};
