export const getDate = (date, { day = true, month = true, year = true } = {}) =>
  new Date(date).toLocaleDateString('en-UK', {
    day: day ? 'numeric' : undefined,
    month: month ? 'long' : undefined,
    year: year ? 'numeric' : undefined,
  });

export const getTime = (date, { hour = true, minute = true, hour12 = true } = {}) => {
  const timeOptions = {
    hour: hour ? 'numeric' : undefined,
    minute: minute ? '2-digit' : undefined,
    hour12: hour12,
  };

  const timeFormatter = new Intl.DateTimeFormat('en-UK', timeOptions);
  return timeFormatter.format(new Date(date));
};
