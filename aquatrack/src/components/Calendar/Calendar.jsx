import React, { useState } from "react";
import s from "./Calendar.module.css";
import dateFormat, { masks } from "dateformat";
import getMonthDates from "../../helpers/getMonthDates";
const Calendar = ({ setPickedDate, waterActions }) => {
  const [countMonth, setCountMonth] = useState(0);

  const currentDay = new Date();
  const tableMonth = new Date();
  tableMonth.setMonth(tableMonth.getMonth() + countMonth);
  const currentMonthDates = getMonthDates(tableMonth);
  const calculateDates = currentMonthDates.map((date) => {
    const totalWater = waterActions
      .filter((actionObj) => {
        const actionDate = new Date(actionObj.date);
        const middleDate = new Date(date);
        return (
          actionDate.getFullYear() === middleDate.getFullYear() &&
          actionDate.getMonth() === middleDate.getMonth() &&
          actionDate.getDate() === middleDate.getDate()
        );
      })
      .reduce((acc, action) => {
        return +action.amount + acc;
      }, 0);

    const percent = Math.floor((totalWater / 1500) * 100);

    return { fullDate: date, percentDay: percent > 100 ? 100 : percent };
  });
  function prevMonth() {
    setCountMonth(countMonth - 1);
  }
  function nextMonth() {
    setCountMonth(countMonth + 1);
  }
  return (
    <section>
      <div>
        <p>Statistic</p>
        <div style={{ display: "flex" }}>
          <button onClick={prevMonth}>-</button>
          <p>{dateFormat(currentMonthDates[0], "mmmm,yy")}</p>
          <button onClick={nextMonth}>+</button>
        </div>
      </div>
      <ul className={s.calendarList}>
        {calculateDates.map((day) => {
          return (
            <li
              key={day.fullDate}
              onClick={() => {
                setPickedDate(day.fullDate);
              }}
              className={s.circle}
              style={{
                color:
                  currentDay.getDate() === new Date(day.fullDate).getDate()
                    ? "#9BE1A0"
                    : "#323F47",
              }}
            >
              <p> {day.fullDate.getDate()}</p>
              <p className={s.percents}>{day.percentDay}%</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Calendar;
