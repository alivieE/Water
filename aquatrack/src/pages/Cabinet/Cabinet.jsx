import React from "react";
import s from "./Cabinet.module.css";
import images from "../../assets";
import Logotype from "../../components/logo/Logotype";
import DayleNorm from "../../components/Daylynormal/DayleNorm";
import AddWater from "../../components/AddWater/AddWater";
import DayleProgressBar from "../../components/Bottle/DayleProgressBar";

const Cabinet = () => {
  return (
    <div className={s.Section}>
      <div className={s.leftSide}>
        <DayleProgressBar percent={"63"}></DayleProgressBar>

        <Logotype></Logotype>
        <DayleNorm></DayleNorm>
        <AddWater></AddWater>
      </div>
      <div className={s.rightSide}></div>
    </div>
  );
};

export default Cabinet;
