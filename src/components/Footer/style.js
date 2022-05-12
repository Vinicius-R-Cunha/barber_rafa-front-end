import styled from "styled-components";

const Container = styled.footer`
    width: 100%;

    padding: 20px 0 80px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #252525;

    img {
        width: 150px;

        margin-bottom: 30px;
    }
`;

const NavButtons = styled.div`
    display: flex;
    align-items: center;
`;

const NavButton = styled.div`
    width: 166px;

    font-size: 1.163rem;
    letter-spacing: 0px;
    font-weight: 400;
    line-height: 1.176em;
    color: #e1e1e1;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 10px;

    cursor: pointer;

    :hover {
        color: #96885f;
        transition: 0.1s ease-in-out;
    }
`;

export { Container, NavButtons, NavButton };
