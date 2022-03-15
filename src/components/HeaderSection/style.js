import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    height: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #FFFFFF;

    background: #A73238;
`

const HeaderDiv = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .nav-button {
        font-size: 24px;

        margin: 0 30px;

        cursor: pointer;
    }

    .logo {
        height: 170px;

        font-family: 'Yesteryear', cursive;

        display: flex;
        align-items: center;

        margin: 0 30px;

        cursor: pointer;

        img {
            width: 110px;
            height: 110px;
    
            margin-right: 30px;
    
            box-sizing: border-box;
    
            border-radius: 50%;
            border: 2px dashed #FFFFFF;
            box-shadow: -2px 5px 25px black;
        }
    
        h1 {
            font-size: 70px;
            color: #FFFFFF;
    
            text-shadow: 0 8px 4px black;
        }
    }
`

const BookButton = styled.button`
    all: unset;

    width: 270px;
    height: 65px;
    
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 2px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 300px;
    border: 2px solid #FFFFFF;

    cursor: pointer;
`

export { Container, HeaderDiv, BookButton }