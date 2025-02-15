import React from "react";
import s from "./DayleNorm.module.css";
import DayleProgressBar from "../DailyProgressBar/DayleProgressBar";



const DayleNorm = ({dailyNorm}) => {
  return (
    <div className={s.normal}>
      <p className={s.AmountOfWater}>{dailyNorm} L</p>
      <p className={s.text}>My daily norma</p>
    </div>
  );
};

export default DayleNorm;
