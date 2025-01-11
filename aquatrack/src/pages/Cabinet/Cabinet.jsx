import React, { useState } from "react";
import s from "./Cabinet.module.css";
import images from "../../assets";
import Logotype from "../../components/logo/Logotype";
import DayleNorm from "../../components/Daylynormal/DayleNorm";
import AddButton from "../../components/AddButton/AddButton";
import DayleProgressBar from "../../components/Bottle/DayleProgressBar";
import AddWater from "../../components/AddWater/AddWater";
import User from "../../components/User/User";
import WaterBlock from "../../components/WaterBlock/WaterBlock";

const Cabinet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={s.Section}>
      <div className={s.leftSide}>
        <DayleProgressBar percent={"63"}></DayleProgressBar>

        <Logotype></Logotype>
        <DayleNorm></DayleNorm>
        <AddButton setIsOpen={setIsOpen}></AddButton>
        {isOpen && <AddWater setIsOpen={setIsOpen}></AddWater>}
      </div>
      <div className={s.rightSide}>
            <p>Hello<span>, Nadia</span></p>
            <User className={s.user}></User>
            <WaterBlock setIsOpen={setIsOpen}></WaterBlock>
            {isOpen && <WaterBlock setIsOpen={setIsOpen}></WaterBlock>}
      </div>
    </div>
  );
};

export default Cabinet;
