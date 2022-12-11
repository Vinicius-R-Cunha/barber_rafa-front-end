export function sumPrices(reservations) {
  const pricesArray = reservations.map(
    ({ price }) => +price.replace("+", "").replace(",", ".")
  );

  return pricesArray
    .reduce((a, b) => a + b, 0)
    .toFixed(2)
    .replace(".", ",");
}

export function getDescription(reservations, time, phone) {
  return `Serviço(s): ${reservations
    .map((obj) => obj.name)
    .join(", ")}, Telefone: ${phone}, horário: ${time}, duração: ${sumDurations(
    reservations
  )}`;
}

export function sumDurations(reservations) {
  const durationsArray = reservations.map(({ duration }) => duration);
  const durationsInMinutesNumber = durationsToNumbersInMinutes(durationsArray);
  const sum = durationsInMinutesNumber.reduce((a, b) => a + b, 0);

  return transformMinutesToString(sum);
}

function durationsToNumbersInMinutes(durations) {
  return durations.map((duration) => {
    if (duration.includes("min") && duration.includes("h")) {
      const hour = duration.slice(0, -3).split("h")[0];
      const min = duration.slice(0, -3).split("h")[1];
      return +hour * 60 + +min;
    } else if (duration.includes("min")) {
      const min = duration.slice(0, -3);
      return +min;
    } else {
      const hour = duration.slice(0, -1);
      return +hour * 60;
    }
  });
}

function transformMinutesToString(value) {
  if (value < 60) return `${value}min`;

  const hour = Math.floor(value / 60);
  const min = value % 60;

  if (min === 0) return `${hour}h`;

  return `${hour}h${min}min`;
}
