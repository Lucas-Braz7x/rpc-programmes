import dayjs from 'dayjs';

export const handleHourFormatted = (hour, timeZone) => {
  const hourWithoutTimeZone = hour.slice(0, 3);
  const hourTimeZone =
    parseInt(hourWithoutTimeZone) - timeZone < 0
      ? parseInt(hourWithoutTimeZone) + 24 - timeZone
      : parseInt(hourWithoutTimeZone) - 3;
  const hourFormatted =
    hourTimeZone.toString().length < 2 ? '0' + hourTimeZone + hour.slice(2, 5) : hourTimeZone + hour.slice(2, 5);

  return hourFormatted;
};

export const handleDateFormatted = (date) => {
  const DateComplete = dayjs(date).format('dddd, D MMM').split(',');

  const weekDay = handleDayFormatted(DateComplete[0]);

  const day = DateComplete[1].slice(1, 3);

  const month = handleMonthFormatted(DateComplete[1].slice(DateComplete[1].length - 3));

  return weekDay + ', ' + day + ' de ' + month;
};

const handleMonthFormatted = (date) => {
  let month;

  switch (date) {
    case 'Jan':
      month = 'Janeiro';
      break;
    case 'Feb':
      month = 'Fevereiro';
      break;
    case 'Mar':
      month = 'Março';
      break;
    case 'Apr':
      month = 'Abril';
      break;
    case 'May':
      month = 'Maio';
      break;
    case 'Jun':
      month = 'Junho';
      break;
    case 'Jul':
      month = 'Julho';
      break;
    case 'Aug':
      month = 'Agosto';
      break;
    case 'Set':
      month = 'Setembro';
      break;
    case 'Oct':
      month = 'Outubro';
      break;
    case 'Nov':
      month = 'Novembro';
      break;
    case 'Dec':
      month = 'Dezembro';
      break;
  }
  return month;
};

const handleDayFormatted = (date) => {
  let day;

  switch (date) {
    case 'Sunday':
      day = 'Dom';
      break;
    case 'Monday':
      day = 'Seg';
      break;
    case 'Tuesday':
      day = 'Ter';
      break;
    case 'Wednesday':
      day = 'Qua';
      break;
    case 'Thursday':
      day = 'Qui';
      break;
    case 'Friday':
      day = 'Sex';
      break;
    case 'Saturday':
      day = 'Sab';
      break;
  }
  return day;
};
