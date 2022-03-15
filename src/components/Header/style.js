import styled from "styled-components";

const HeaderDiv = styled.div`
    width: 100%;
    height: 130px;

    font-family: 'Yesteryear', cursive;

    display: flex;
    justify-content: center;
    align-items: center;

    //background: #303134;
    background: #A73238;

    box-shadow: 0 4px 4px black;

    position: fixed;
    top: 0;
    z-index: 1;

    img {
        width: 120px;
        height: 120px;

        margin-right: 30px;

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
`

export { HeaderDiv }