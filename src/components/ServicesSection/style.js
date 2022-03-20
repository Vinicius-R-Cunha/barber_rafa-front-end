import styled from "styled-components";

const ServicesDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
    padding: 90px 0;

    background-color: #FFFFFF;

    .services-title {
        font-size: 17px;
        font-weight: 700;
        text-transform: uppercase;
    }
`

const Services = styled.div`
    width: 1200px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 40px;

    justify-content: center;

    background-color: green;
`

const Service = styled.div`
    width: 380px;
    height: 150px;

    background-color: lightgreen;

    .service-name {
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: rgba(0,0,0,.6);
    }
`

export { ServicesDiv, Services, Service }