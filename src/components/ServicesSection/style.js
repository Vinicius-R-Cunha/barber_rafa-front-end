import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    background-color: #252525;

    padding-bottom: 80px;
`;

const Category = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 112px;

    .category-title {
        font-family: "Teko";
        font-size: 4.375rem;
        font-weight: 500;
        line-height: 1em;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        color: #96885f;
    }

    @media (max-width: 750px) {
        padding-top: 50px;

        .category-title {
            font-size: 2.575rem;
        }
    }

    @media (max-width: 350px) {
        .category-title {
            font-size: 2.275rem;
        }
    }
`;

const Services = styled.div`
    width: 1170px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;

    padding-top: 80px;

    @media (max-width: 1270px) {
        width: 94%;
    }

    @media (max-width: 1023px) {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }

    @media (max-width: 1023px) {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }

    @media (max-width: 750px) {
        padding-top: 42px;

        grid-template-columns: 1fr;
    }
`;

const Service = styled.div`
    width: 100%;
    height: 230px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #2c2c2c;

    position: relative;

    padding-bottom: 70px;

    @media (max-width: 1023px) {
        height: 180px;
    }
`;

const NamePrice = styled.div`
    width: 90%;
    height: 100px;

    font-family: "Teko";
    font-size: 1.488rem;
    font-weight: 500;
    line-height: 1em;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #e1e1e1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 35px;

    .name {
        width: 60%;
    }

    @media (max-width: 1023px) {
        height: 70px;

        font-size: 1.088rem;
    }
`;

const Description = styled.div`
    width: 90%;

    font-family: "Montserrat";
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.167em;
    letter-spacing: 0;
    color: #8d8d8d;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    position: absolute;
    bottom: 110px;

    @media (max-width: 1023px) {
        font-size: 0.888rem;
    }
`;

const ReadMore = styled.p`
    width: 85%;

    font-family: "Montserrat";
    font-size: 0.875rem;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    color: #96885f;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: absolute;
    bottom: 75px;

    cursor: pointer;

    @media (max-width: 1023px) {
        font-size: 0.675rem;
    }
`;

const ButtonContainer = styled.div`
    width: 90%;

    font-family: "Montserrat";
    font-size: 0.875rem;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: 0.7px;
    color: #e1e1e1;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 10px;

    position: absolute;
    bottom: 15px;

    .duration {
        font-weight: 400;
        color: #8d8d8d;
    }

    button {
        all: unset;

        padding: 5px 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 4px;
        border: 4px solid #96885f;

        cursor: pointer;

        :hover {
            transition: 0.3s ease-out;
            background-color: #96885f;
        }
    }

    @media (max-width: 1023px) {
        font-size: 0.675rem;
    }
`;

export {
    Container,
    Category,
    Services,
    Service,
    NamePrice,
    Description,
    ButtonContainer,
    ReadMore,
};
