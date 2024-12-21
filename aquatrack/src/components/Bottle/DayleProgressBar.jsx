import React, { useState } from "react";

import s from "./DayleProgressBar.module.css";

const DayleProgressBar = ({ percent }) => {
  console.log(percent);
  return (
    <div className={s.container}>
      <p className={s.today}> Today</p>
      <div className={s.progressBar}>
        <div style={{ width: percent + "%" }} className={s.progressLine}>
          {" "}
          <div className={s.thumb}>
            <p className={s.percentThumb}>{percent}%</p>
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
