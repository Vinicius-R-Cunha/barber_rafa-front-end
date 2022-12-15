export default function buildCalendar(value) {
  const startDay = value.startOf("month").startOf("week");
  const endDay = value.endOf("month").endOf("week");
  let day = startDay.add(-1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          day.add(1, "day");
          day = day.add(1, "day");
          return day;
        })
    );
  }

  return calendar;
}
