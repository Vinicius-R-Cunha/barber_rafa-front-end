import styled from "styled-components";

const SecurityDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 90px 0;

    background-color: #F7F7F7;

    .security-title {
        font-size: 40px;
        color: rgba(0,0,0,.79);

    }
    
    ul {
        list-style-type: square;

        li {
            font-size: 18px;
        }
    }
`

export { SecurityDiv }