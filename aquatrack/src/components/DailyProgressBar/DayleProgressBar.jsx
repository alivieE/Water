import React, { useState } from "react";
import dateFormat, { masks } from "dateformat";
import s from "./DayleProgressBar.module.css";

const DayleProgressBar = ({ pickedDate, filteredWaterActions }) => {
  const totalWater = filteredWaterActions.reduce((acc, action) => {
    return +action.amount + acc;
  }, 0);
  const percent = Math.floor((totalWater / 1500) * 100);
  return (
    <div className={s.container}>
      <p className={s.today}> {dateFormat(pickedDate, "dd.mm")}</p>
      <div className={s.progressBar}>
        <div
          style={{ width: percent > 100 ? 100 + "%" : percent + "%" }}
          className={s.progressLine}
        >
          {" "}
          <div className={s.thumb}>
            <p className={s.percentThumb}>
              {percent > 100 ? 100 + "%" : percent + "%"}
            </p>
          </div>
        </div>
      </div>
      <div className={s.percent}>
        <p>0%</p>
        <p>100%</p>
      </div>
    </div>
  );
};

export default DayleProgressBar;
