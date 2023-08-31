export function birthFormatHelper(
  birthNum: string,
  birthFormat?: "yyyy-mm-dd" | "yyyymmdd" | "yy-mm-dd" | "yymmdd"
) {
  const year = birthNum.slice(0, 4);
  const month = birthNum.slice(4, 6);
  const day = birthNum.slice(6, 8);

  switch (birthFormat) {
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    case "yyyymmdd":
      return `${year}${month}${day}`;
    case "yy-mm-dd":
      const shortYear = year.slice(2);
      return `${shortYear}-${month}-${day}`;
    case "yymmdd":
      const shortYearWithoutLeadingZero = String(Number(year.slice(2)));
      return `${shortYearWithoutLeadingZero}${month}${day}`;
    default:
      throw new Error("Unsupported birthFormat");
  }
}

export function phonHyphenShow(phoneNum: string) {
  const first = phoneNum.slice(0, 3);
  const second = phoneNum.slice(3, 7);
  const third = phoneNum.slice(7, 10);

  return { first } + "-" + { second } + "-" + { third };
}
