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
    background-size: 100% 800px;
`

const HeaderDiv = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .nav-button {
        font-size: 19px;
        letter-spacing: 2px;
        font-weight: 700;
        text-transform: uppercase;

        margin: 0 30px;

        cursor: pointer;

        :hover {
            color: #A73238;
            transition: .1s ease-in-out;
        }
    }

    .logo {
        height: 170px;

        font-family: 'Yesteryear', cursive;

        display: flex;
        align-items: center;

        margin: 0 30px;

        cursor: pointer;

        img {
            width: 130px;
            height: 130px;
    
            margin-right: 35px;
    
            box-sizing: border-box;
    
            border-radius: 50%;
            border: 2px dashed #FFFFFF;
            box-shadow: -2px 5px 25px black;
        }
    
        h1 {
            font-size: 80px;
            color: #FFFFFF;
    
            text-shadow: 0 8px 4px black;
        }
    }
`

const BookButton = styled.button`
    all: unset;

    width: 370px;
    height: 90px;
    
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 2px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 20px 0;
    
    border-radius: 300px;
    border: 3px solid #FFFFFF;

    cursor: pointer;

    :hover {
        transition: .1s linear;
        color: #000000;
        background-color: #FFFFFF;
    }
`

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 40px;

    .about {
        font-size: 76px;
        font-weight: 700;
        line-height: 100px;
        color: #A73238;

        text-align: center;

        text-shadow: 0 6px 4px black;
    }

    .adress {
        font-size: 26px;
        color: #000000;

        margin-top: 40px;

        text-shadow: -2px 5px 25px black;
    }

    .phone-number {
        font-size: 60px;
        font-weight: 700;

        margin-top: 40px;

        text-shadow: -2px 5px 25px black;
    }
`

export { Container, HeaderDiv, BookButton, AboutDiv }