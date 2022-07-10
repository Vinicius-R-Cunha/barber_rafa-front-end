export function sumDurations(reservations) {
  const durationsArray = reservations.map((obj) => obj.duration);
  const minutesArray = transformDurationsToMinutes(durationsArray);
  const sum = minutesArray.reduce((a, b) => a + b, 0);

  return transformMinutesToString(sum);
}

export function sumPrices(reservations) {
  const pricesArray = reservations.map((obj) => obj.price);
  const pricesToNumberArray = transformPricesToNumber(pricesArray);
  const sum = pricesToNumberArray.reduce((a, b) => a + b, 0);

  return sum.toFixed(2).replace(".", ",");
}

export function displayServiceNames(reservations) {
  return reservations.map((obj) => obj.name).join(", ");
}

function transformDurationsToMinutes(durations) {
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
      return +hour;
    }
  });
}

function transformMinutesToString(value) {
  if (value < 60) return `${value}min`;

  const hour = Math.floor(value / 60);
  const min = value % 60;

  return `${hour}h${min}min`;
}

function transformPricesToNumber(prices) {
  return prices.map((price) => +price.replace("+", "").replace(",", "."));
}
