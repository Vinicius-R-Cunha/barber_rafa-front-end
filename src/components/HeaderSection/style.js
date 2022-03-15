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
        font-size: 23px;
        letter-spacing: 2px;
        font-weight: 700;

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
        color: #A73238;
        background-color: #FFFFFF;
    }
`

const ScheduleDiv = styled.div`

    background-color: green;

    .schedule-title {
        font-size: 40px;
        font-weight: 700;

        margin-bottom: 40px;
    }

    .weekday {
        font-size: 25px;
        
        display: flex;
        justify-content: space-between;

        margin-bottom: 35px;
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

        text-align: center;
    }

    .adress {
        font-size: 26px;

        margin-top: 40px;
    }

    .phone-number {
        font-size: 60px;
        font-weight: 700;

        margin-top: 40px;
    }
`

export { Container, HeaderDiv, BookButton, ScheduleDiv, AboutDiv }