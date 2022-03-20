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
        font-size: 26px;
        font-weight: 700;
        text-transform: uppercase;

        margin-bottom: 30px;
    }
`

const Services = styled.div`
    width: 1126px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 40px;

    justify-content: center;

    margin-bottom: 40px;
`

const Service = styled.div`
    width: 320px;
    min-height: 100px;
    /* max-height: 180px; */

    padding: 10px;

    /* border-radius: 15px;
    border: 1px solid rgba(0,0,0,.1);

    box-shadow: 5px 8px 15px black; */

    cursor: pointer;

    .name-price-div {
        width: 100%;

        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: rgba(0,0,0,.6);

        display: flex;
        justify-content: space-between;

        .service-name {
            width: 70%;
            line-height: 20px;
        }       
    }

    .description {
        font-size: 16px;
        line-height: 21px;
        color: rgba(0,0,0,.7);

        margin-top: 12px;
    }
`

export { ServicesDiv, Services, Service }