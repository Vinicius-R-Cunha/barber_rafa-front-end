import { Calendar as ReactCalendar } from "react-calendar";
import dayjs from "dayjs";
import { Container } from "./style";

export default function Calendar({ handleCalendarClick }) {
  return (
    <Container>
      <ReactCalendar
        className={["c1"]}
        calendarType={"US"}
        onClickDay={handleCalendarClick}
        tileDisabled={({ date }) => date < dayjs().add(-1, "day").toDate()}
        minDate={dayjs().toDate()}
        maxDate={dayjs().add(2, "M").toDate()}
      />
    </Container>
  );
}
