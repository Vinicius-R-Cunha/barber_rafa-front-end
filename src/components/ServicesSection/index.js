import { ServicesDiv, Services, Service } from "./style";

export default function ServicesSection() {

    const servicesArray = [
        {
            id: 1, title: "Cortes de Cabelo", data: [
                { id: 1, name: "Adulto e adolescente", price: "40,00", description: "Corte com máquinas e tesouras , tudo de acordo com o pedido do cliente , fazemos a releitura do corte conforme o cliente descrever , ( aparamos os pelos do ouvido e sobrancelha ) ." },
                { id: 2, name: "Infantil", price: "30,00", description: "Corte com máquinas e tesouras como a preferências do tutor, habilidade de lidar com crianças e espaço confortável para os mesmos, Preço fixo para as crianças com menos de 12 anos ." },
                { id: 3, name: "Acabamento", price: "15,00", description: "Acabamento se encaixa para aqueles que querem um alinhamento melhor no contorno do corte , deixando assim as demarcações visíveis e controlada ." },
                { id: 4, name: "Só Lateral", price: "25,00", description: "O corte $25,00 se encaixa para as pessoas que vão somente aparar a lateral do cabelo seja com um único numero de máquina ou um Fade(disfarce) completo, Valor se encaixa para adultos e crianças , (aparamos pelos do ouvido e sobrancelha ) ." },
                { id: 5, name: "Raspado na maquina e navalha", price: "25,00", description: "Trabalho realizado com maquina e Navalhete com lâminas descartáveis, gel shaving e pós barba ." },
            ]
        },
        {
            id: 1, title: "Pacotes Mensais", data: [
                { id: 1, name: "2 Cortes de Cabelo no período de 15 em 15 dias", price: "70,00", description: "Após o período específico do combo , valor sujeito a ajuste ." },
                { id: 2, name: "4 Cortes de Cabelo no período de 7 em 7 dias", price: "100,00", description: "4 Cortes de cabelo no mês? Wow , Seu corte sempre em dia, é um sonho para quem tem que estar sempre alinhado no seu ofício não é mesmo? Facilitamos isso pra você, quebrando valor e te deixando mais confortável com um valor acessível para estar sempre bonito na foto . O seu corte de cabelo completo vai sair só por $25,00 😎 curtiu? Bora fechar esse pacote então meu amigo !" },
                { id: 3, name: "2 Barbas de respeito no período de 15 em 15 dias", price: "60,00", description: "" },
                { id: 4, name: "4 Barbas de respeito no período de 7 em 7 dias", price: "100,00", description: "Após o período específico do combo , valor sujeito a ajuste ." },
                { id: 5, name: "Raspar a cabeça + Barba de respeito de 15 em 15 dias", price: "100,00", description: "" },
                { id: 6, name: "Raspar a cabeça + Barba de respeito de 7 em 7 dias", price: "180,00", description: "" },
            ]
        },
    ];

    return (
        <ServicesDiv>
            {servicesArray.map(service => {
                return (
                    <>
                        <p className="services-title">{service.title}</p>
                        <Services>
                            {service.data.map(obj => {
                                return (
                                    <Service>
                                        <div className="name-price-div">
                                            <p className="service-name">{obj.name}</p>
                                            <p className="service-price">{`R$ ${obj.price}`}</p>
                                        </div>
                                        <p className="description">{obj.description}</p>
                                    </Service>
                                )
                            })}
                        </Services>
                    </>
                )
            })}
        </ServicesDiv>
    )
}