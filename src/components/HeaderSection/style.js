import styled from "styled-components";
import background from '../../assets/background.jpeg'

const Container = styled.div`
    width: 100%;
    height: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #FFFFFF;

    background: #A73238;
    background-image: url(${background});
    background-size: 100%, 800px, cover;

    .nav-button {
        font-size: 17px;
        letter-spacing: 2px;
        font-weight: 700;
        text-transform: uppercase;

        margin: 0 16px;

        cursor: pointer;

        :hover {
            color: #A73238;
            transition: .1s ease-in-out;
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
            border: 2px dashed #FFFFFF;
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

    @media(max-width: 1249px) {
        background-size: cover;

        .query-1250px {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    .left-right-side {
        min-width: 410px;
    }

    .logo-image {
        width: 250px;
        height: 250px;

        margin-bottom: 50px;

        margin: 0 60px;

        border-radius: 50%;
        border: 2px dashed #FFFFFF;
        box-shadow: -2px 5px 25px black;
        
        cursor: pointer;
    }

    @media(max-width: 1249px) {
        display: none;
    }
`

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
    border: 3px solid #FFFFFF;

    cursor: pointer;

    :hover {
        transition: .1s linear;
        color: #000000;
        background-color: #FFFFFF;
    }

    @media(max-width: 1249px) {
        width: 230px;
        height: 63px;

        margin: 55px 0 30px 0;
    }
`

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
        color: #FFFFFF;

        margin-top: 38px;

        text-shadow: -2px 5px 25px black;
    }

    @media(max-width: 1249px) {
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
`

export { Container, HeaderDiv, BookButton, AboutDiv }