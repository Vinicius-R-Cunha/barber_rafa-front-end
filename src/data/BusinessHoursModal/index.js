import dayjs from "dayjs";

function stringTimeToDayjs(time) {
  return dayjs(`01/01/2000 ${time}`, "MM/DD/YYYY H:mm");
}

function createSchedulesArray(startTime, endTime) {
  const dayjsStart = stringTimeToDayjs(startTime);
  const dayjsEnd = stringTimeToDayjs(endTime);
  const arr = [dayjsStart];

  while (dayjsEnd.diff(arr[arr.length - 1]) !== 0) {
    const lastDate = arr[arr.length - 1];
    arr.push(lastDate.add(15, "m"));
  }

  return arr.map((date) => date.format("HH:mm"));
}

const scheduleArray = createSchedulesArray("7:00", "23:00");

const weekdays = {
  0: "Domingo",
  1: "Segunda-feira",
  2: "Terça-feira",
  3: "Quarta-feira",
  4: "Quinta-feira",
  5: "Sexta-feira",
  6: "Sábado",
};

export { scheduleArray, weekdays };
