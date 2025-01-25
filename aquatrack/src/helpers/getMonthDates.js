const getMonthDates = (date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDay.getDate();

  const dates = [];

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(new Date(firstDay.getFullYear(), firstDay.getMonth(), i));
  }

  return dates;
};
export default getMonthDates;
