import { Container, HeaderDiv, BookButton, ScheduleDiv, AboutDiv } from "./style"
import logo from '../../assets/logo.jpg'

export default function HeaderSection() {

    const scheduleArray = [
        { id: 1, day: "Segunda-Feira", open: null, close: null },
        { id: 2, day: "Terça-Feira", open: "09:00", close: "20:00" },
        { id: 3, day: "Quarta-Feira", open: "09:00", close: "20:00" },
        { id: 4, day: "Quinta-Feira", open: "09:00", close: "20:00" },
        { id: 5, day: "Sexta-Feira", open: "09:00", close: "20:00" },
        { id: 6, day: "Sábado", open: "08:00", close: "19:30" },
        { id: 7, day: "Domingo", open: null, close: null }
    ];

    return (
        <Container>
            <HeaderDiv>
                <p className="nav-button">Serviços</p>
                <div className="logo" onClick={() => window.location.reload()}>
                    <img src={logo} alt="" />
                    <h1>Barber Rafa Macedo</h1>
                </div>
                <p className="nav-button">Contato</p>
            </HeaderDiv>
            <BookButton>Agendar</BookButton>
            <AboutDiv>
                <p className="about">Barbearia com ambiente <br /> para toda a familia</p>
                <p className="adress">Rua Itinguçu, 1085, 03658-010, São Paulo</p>
                <p className="phone-number">(11) 98747-9047</p>
            </AboutDiv>
            {/* <ScheduleDiv>
                <p className="schedule-title">Horário de funcionamento:</p>
                {scheduleArray.map(weekday => {
                    return (
                        weekday.open ?
                            <div className="weekday">
                                <p>{weekday.day}</p>
                                <p>{`${weekday.open} - ${weekday.close}`}</p>
                            </div> :
                            <div className="weekday">
                                <p>{weekday.day}</p>
                                <p>Fechado</p>
                            </div>
                    )
                })}
            </ScheduleDiv> */}
        </Container>
    )
}