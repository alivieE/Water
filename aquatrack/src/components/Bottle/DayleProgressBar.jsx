import React, { useState } from "react";

import s from "./DayleProgressBar.module.css";

const DayleProgressBar = ({ percent }) => {
  console.log(percent);
  return (
    <div className={s.container}>
      <div className={s.progressBar}>
        <div style={{ width: percent + "%" }} className={s.progressLine}>
          {" "}
          <div className={s.thumb}></div>
        </div>
      </div>

      <p> L</p>
    </div>
  );
};

export default DayleProgressBar;
