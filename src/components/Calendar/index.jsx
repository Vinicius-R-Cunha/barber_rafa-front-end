import dayjs from "dayjs";
import { Container, Row, Arrow, YearMonth, Weekday, Day } from "./style";
import { useEffect, useState } from "react";
import buildCalendar from "./build";
import { months, weekdays } from "./translate";

export default function Calendar({ handleCalendarClick }) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(dayjs());
  const [selected, setSelected] = useState(dayjs());

  const MIN_DATE = dayjs();
  const MAX_DATE = dayjs().add(2, "month");

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function handlePreviousMonth() {
    const previousMonth = value.add(-1, "month");
    if (previousMonth.isBefore(MIN_DATE, "month")) return;

    setValue((prev) => prev.add(-1, "month"));
  }

  function handleNextMonth() {
    const nextMonth = value.add(1, "month");
    if (nextMonth.isAfter(MAX_DATE, "month")) return;

    setValue((prev) => prev.add(1, "month"));
  }

  return (
    <Container>
      <Row>
        <Arrow
          onClick={handlePreviousMonth}
          isDisabled={value.add(-1, "month").isBefore(MIN_DATE, "month")}
        >
          {"<"}
        </Arrow>
        <YearMonth>
          {months[value.get("month")]} - {value.format("YYYY")}
        </YearMonth>
        <Arrow
          onClick={handleNextMonth}
          isDisabled={value.add(1, "month").isAfter(MAX_DATE, "month")}
        >
          {">"}
        </Arrow>
      </Row>

      <Row>
        {weekdays.map((day, i) => (
          <Weekday isWeekend={i === 0 || i === 6} key={day}>
            {day}
          </Weekday>
        ))}
      </Row>

      {calendar.map((week, i) => (
        <Row key={i}>
          {week.map((day, j) => (
            <Day
              key={j}
              isNotFromThisMonth={!day.isSame(value, "month")}
              isToday={dayjs().isSame(day, "day")}
              isSelected={day.isSame(selected, "day")}
              isWeekend={j === 0 || j === 6}
              tileDisabled={
                day.isBefore(dayjs(), "day") ||
                day.isAfter(dayjs().add(2, "month"), "month")
              }
              onClick={() => {
                if (
                  day.isAfter(dayjs().add(-1, "day"), "day") &&
                  !day.isAfter(dayjs().add(2, "month"), "month")
                ) {
                  setValue(day);
                  setSelected(day);
                  handleCalendarClick(day.toISOString());
                }
              }}
            >
              {day.format("D").toString()}
            </Day>
          ))}
        </Row>
      ))}
    </Container>
  );
}
