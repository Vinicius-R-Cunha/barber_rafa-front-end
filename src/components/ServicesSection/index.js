import { ScheduleDiv } from "./style"

export default function ServicesSection() {
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
        <ScheduleDiv>
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
        </ScheduleDiv>
    );
}