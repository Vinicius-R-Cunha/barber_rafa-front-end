import { ServicesDiv, Services, Service } from "./style";

export default function ServicesSection() {
    return (
        <ServicesDiv>
            <p className="services-title">Cortes de Cabelo</p>
            <Services>
                <Service>
                    <p className="service-name">Adulto e adolescente</p>
                </Service>
                <Service>
                    <p className="service-name">Infantil</p>
                </Service>
                <Service>
                    <p className="service-name">Acabamento</p>
                </Service>
                <Service>
                    <p className="service-name">Só Lateral</p>
                </Service>
                <Service>
                    <p className="service-name">Raspado na maquina e navalha</p>
                </Service>
            </Services>
            <Services>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </Services>
        </ServicesDiv>
    )
}