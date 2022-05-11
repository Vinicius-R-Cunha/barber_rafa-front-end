import { ServicesDiv, Services, Service } from "./style";
import React, { useEffect, useState } from "react";
import * as api from "../../services/api";

export default function ServicesSection() {
    const [categoriesArray, setCategoriesArrayArray] = useState([]);

    useEffect(() => {
        renderPage();
    }, []);

    async function renderPage() {
        const categories = await api.getCategories();
        setCategoriesArrayArray(categories);
    }

    function formatPrice(price) {
        const newPrice = price / 100;
        return newPrice.toFixed(2).replace(".", ",");
    }

    if (categoriesArray.length === 0) {
        return <h1>Carregando...</h1>;
    }

    return (
        <ServicesDiv name="services">
            {categoriesArray?.map((category) => {
                return (
                    <React.Fragment key={category?._id}>
                        <p className="services-title">{category?.title}</p>
                        <Services>
                            {category?.services?.map((services) => {
                                return (
                                    <Service key={services?._id}>
                                        <div className="name-price-div">
                                            <p className="service-name">
                                                {services?.name}
                                            </p>
                                            <p className="service-price">{`R$ ${formatPrice(
                                                services?.price
                                            )}`}</p>
                                        </div>
                                        <p className="description">
                                            {services?.description}
                                        </p>
                                        <div className="button-div">
                                            <p className="duration">
                                                {services?.duration}
                                            </p>
                                            <button>Reservar</button>
                                        </div>
                                    </Service>
                                );
                            })}
                        </Services>
                    </React.Fragment>
                );
            })}
        </ServicesDiv>
    );
}
