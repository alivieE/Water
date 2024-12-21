import React, { useState } from "react";
import s from "./Cabinet.module.css";
import images from "../../assets";
import Logotype from "../../components/logo/Logotype";
import DayleNorm from "../../components/Daylynormal/DayleNorm";
import AddButton from "../../components/AddButton/AddButton";
import DayleProgressBar from "../../components/Bottle/DayleProgressBar";
import AddWater from "../../components/AddWater/AddWater";

const Cabinet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={s.Section}>
      <div className={s.leftSide}>
        <DayleProgressBar percent={"63"}></DayleProgressBar>

        <Logotype></Logotype>
        <DayleNorm></DayleNorm>
        <AddButton sumFunction={setIsOpen}></AddButton>
        {isOpen && <AddWater></AddWater>}
      </div>
      <div className={s.rightSide}></div>
    </div>
  );
};

export default Cabinet;
