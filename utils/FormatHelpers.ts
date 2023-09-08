export function birthFormatHelper(
  birthNum: string,
  birthFormat?: 'yyyy-mm-dd' | 'yyyymmdd' | 'yy-mm-dd' | 'yymmdd',
) {
  const year = birthNum.slice(0, 4);
  const month = birthNum.slice(4, 6);
  const day = birthNum.slice(6, 8);

  switch (birthFormat) {
    case 'yyyy-mm-dd':
      return `${year}-${month}-${day}`;
    case 'yyyymmdd':
      return `${year}${month}${day}`;
    case 'yy-mm-dd':
      const shortYear = year.slice(2);
      return `${shortYear}-${month}-${day}`;
    case 'yymmdd':
      const shortYearWithoutLeadingZero = String(Number(year.slice(2)));
      return `${shortYearWithoutLeadingZero}${month}${day}`;
    default:
      throw new Error('Unsupported birthFormat');
  }
}

export function phonHyphenShow(phoneNum: string) {
  const first = phoneNum.slice(0, 3);
  const second = phoneNum.slice(3, 7);
  const third = phoneNum.slice(7, 10);

  return { first } + '-' + { second } + '-' + { third };
}

export function dateFormatter(date: string) {
  const parts = date.split('/');
  const result = parts.join('-');
  return result;
}

export function getDDay(end: string) {
  const currentDate = new Date();
  const endDateParts = end.split('/');

  const endYear = parseInt(endDateParts[0]);
  const endMonth = parseInt(endDateParts[1]) - 1;
  const endDay = parseInt(endDateParts[2]);

  const expirationDate = new Date(endYear, endMonth, endDay);

  const timeDifference = expirationDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysRemaining;
}

export function hyphenToSlashDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}
