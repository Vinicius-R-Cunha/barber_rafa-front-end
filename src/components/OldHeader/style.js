import styled from "styled-components";
import background from "../../assets/background.jpeg";

const Container = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    background: #a73238;
    background-image: url(${background});
    background-size: 100%, 800px, cover;
    position: relative;
    .menu-icon {
        display: none;
        font-size: 40px;
        position: absolute;
        top: 5px;
        left: 9px;
    }
    .nav-button {
        font-size: 17px;
        letter-spacing: 2px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0 16px;
        cursor: pointer;
        :hover {
            color: #a73238;
            transition: 0.1s ease-in-out;
        }
    }
    .query-1250px {
        display: none;
        .logo-image-1250px {
            width: 230px;
            height: 230px;
            margin-top: 10px;
            margin-bottom: 28px;
            border-radius: 50%;
            border: 2px dashed #ffffff;
            box-shadow: -2px 5px 25px black;
            cursor: pointer;
        }
        .nav-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
        }
    }
    @media (max-width: 1249px) {
        background-size: cover;
        .query-1250px {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    @media (max-width: 879px) {
        .query-1250px {
            .logo-image-1250px {
                width: 180px;
                height: 180px;
                margin-top: 40px;
            }
            .nav-buttons {
                display: none;
            }
        }
        .menu-icon {
            display: flex;
        }
    }
    @media (max-width: 629px) {
        height: 540px;
        .query-1250px {
            .logo-image-1250px {
                width: 140px;
                height: 140px;
                margin-top: 25px;
            }
        }
    }
`;

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .left-right-side {
        min-width: 410px;
        display: flex;
    }
    .logo-image {
        width: 250px;
        height: 250px;
        margin-bottom: 50px;
        margin: 0 60px;
        border-radius: 50%;
        border: 2px dashed #ffffff;
        box-shadow: -2px 5px 25px black;
        cursor: pointer;
    }
    @media (max-width: 1249px) {
        display: none;
    }
`;

const BookButton = styled.button`
    all: unset;
    width: 280px;
    height: 73px;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0 40px 0;
    border-radius: 300px;
    border: 3px solid #ffffff;
    cursor: pointer;
    :hover {
        transition: 0.1s linear;
        color: #000000;
        background-color: #ffffff;
    }
    @media (max-width: 1249px) {
        width: 230px;
        height: 63px;
        margin: 55px 0 30px 0;
    }
    @media (max-width: 879px) {
        margin: 30px 0;
    }
    @media (max-width: 629px) {
        margin: 20px 0;
        background-color: transparent;
    }
`;

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .about {
        font-size: 60px;
        font-weight: 700;
        line-height: 80px;
        color: #b2353b;
        text-align: center;
        text-shadow: 0 6px 4px black;
    }
    .phone-number {
        font-size: 45px;
        font-weight: 700;
        margin-top: 40px;
        text-shadow: -2px 5px 25px black;
    }
    .adress {
        font-size: 22px;
        font-weight: 700;
        color: #ffffff;
        margin-top: 38px;
        text-shadow: -2px 5px 25px black;
    }
    @media (max-width: 1249px) {
        .about {
            font-size: 50px;
        }
        .phone-number {
            font-size: 40px;
        }
        .adress {
            font-size: 20px;
        }
    }
    @media (max-width: 639px) {
        .about {
            font-size: 32px;
            line-height: 40px;
        }
        .phone-number {
            font-size: 25px;
            margin-top: 25px;
        }
        .adress {
            font-size: 14px;
            margin-top: 25px;
        }
    }
`;

const MobileMenu = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    background-color: #000;
    opacity: 0.8;
    position: fixed;
    top: 0;
    .nav-button {
        font-size: 20px;
    }
`;

export { Container, HeaderDiv, BookButton, AboutDiv, MobileMenu };
