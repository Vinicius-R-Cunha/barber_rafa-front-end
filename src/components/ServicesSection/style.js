import styled from "styled-components";

const ServicesDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
    padding: 90px 0;

    background-color: #ffffff;

    .services-title {
        font-size: 26px;
        font-weight: 700;
        text-transform: uppercase;

        margin-bottom: 30px;
    }

    @media (max-width: 779px) {
        padding-bottom: 30px;
    }
`;

const Services = styled.div`
    width: 1126px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 40px;

    justify-content: center;

    padding-bottom: 20px;
    margin-bottom: 20px;

    @media (max-width: 1249px) {
        width: 700px;

        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 779px) {
        width: 350px;

        grid-template-columns: 1fr;
    }

    @media (max-width: 380px) {
        width: 100%;

        box-sizing: border-box;
        padding-left: 13px;
    }
`;

const Service = styled.div`
    width: 320px;
    min-height: 100px;

    padding: 10px;

    position: relative;

    .name-price-div {
        width: 100%;

        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.6);

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
        text-align: justify;
        text-justify: inter-word;
        color: rgba(0, 0, 0, 0.7);

        margin-top: 12px;
    }

    .button-div {
        width: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        margin-top: 15px;

        .duration {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.7);

            margin-right: 6px;
        }

        button {
            all: unset;

            font-size: 12px;
            font-weight: 700;
            color: #ffffff;

            padding: 7px 8px;
            background-color: #a73238;
            border-radius: 7px;

            cursor: pointer;

            :hover {
                background-color: #cf6066;
            }
        }
    }

    @media (max-width: 380px) {
        width: 90%;

        .name-price-div {
            font-size: 16px;
        }

        .description {
            font-size: 15px;
        }
    }
`;

export { ServicesDiv, Services, Service };
