import { Calendar as ReactCalendar } from "react-calendar";
import dayjs from "dayjs";
import { Container, Week, Day, YearMonth } from "./style";
import { useEffect, useState } from "react";
import buildCalendar from "./build";

export default function Calendar({ handleCalendarClick }) {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(dayjs());
  const [selected, setSelected] = useState(dayjs());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function handlePreviousMonth() {
    if (value.add(-1, "month").isBefore(dayjs(), "month")) return;
    setValue((prev) => prev.add(-1, "month"));
  }

  function handleNextMonth() {
    if (value.add(1, "month").isAfter(dayjs().add(2, "month"), "month")) return;
    setValue((prev) => prev.add(1, "month"));
  }

  return (
    <Container>
      <Week>
        <Day
          onClick={handlePreviousMonth}
          tileDisabled={value.add(-1, "month").isBefore(dayjs(), "month")}
        >
          {"<"}
        </Day>
        <YearMonth>
          {currMonthName()} - {currYear()}
        </YearMonth>
        <Day
          onClick={handleNextMonth}
          tileDisabled={value
            .add(1, "month")
            .isAfter(dayjs().add(2, "month"), "month")}
        >
          {">"}
        </Day>
      </Week>
      <Week>
        <Day isWeekend={true}>DOM</Day>
        <Day>SEG</Day>
        <Day>TER</Day>
        <Day>QUA</Day>
        <Day>QUI</Day>
        <Day>SEX</Day>
        <Day isWeekend={true}>SÁB</Day>
      </Week>
      {calendar.map((week, i) => (
        <Week key={i}>
          {week.map((day, j) => (
            <Day
              key={j}
              isNotFromThisMonth={day.month() !== value.month()}
              isToday={dayjs().isSame(day, "day")}
              isSelected={selected.isSame(day, "day")}
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
        </Week>
      ))}
      {/* <ReactCalendar
          className={["c1"]}
          calendarType={"US"}
          onClickDay={handleCalendarClick}
          tileDisabled={({ date }) => date < dayjs().add(-1, "day").toDate()}
          minDate={dayjs().toDate()}
          maxDate={dayjs().add(2, "M").toDate()}
        /> */}
    </Container>
  );
}
