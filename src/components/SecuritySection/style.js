import styled from "styled-components";

const SecurityDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 90px 0 70px 0;

    background-color: #FFFFFF;

    .security-title {
        font-size: 35px;
        color: rgba(0,0,0,.79);

        margin-bottom: 45px;
    }
    
    ul {
        width: 850px;

        list-style-type: square;
        display: grid;
        grid-template-columns: 1fr 1fr;

        li {
            font-size: 18px;
            line-height: 22px;
            color: rgba(0,0,0,.79);

            margin-left: 50px;
            margin-bottom: 30px;
        }
    }

    @media(max-width: 879px) {
        ul {
            width: 630px;

            display: flex;
            flex-direction: column;
            align-items: center;

            li {
                width: 70%;
            }
        }
    }

    @media(max-width: 639px) {

        .security-title {
            font-size: 21px;
        }

        ul {
            width: 100%;

            li {
                font-size: 16px;
            }
        }
    }
`

export { SecurityDiv }