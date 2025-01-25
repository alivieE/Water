import React, { use, useState } from "react";
import s from "./Cabinet.module.css";
import images from "../../assets";
import Logotype from "../../components/logo/Logotype";
import DayleNorm from "../../components/Daylynormal/DayleNorm";
import AddButton from "../../components/AddButton/AddButton";
import DayleProgressBar from "../../components/Bottle/DayleProgressBar";
import AddWater from "../../components/AddWater/AddWater";
import User from "../../components/User/User";
import WaterBlock from "../../components/WaterBlock/WaterBlock";
import UserInfo from "../../components/UserInfo/UserInfo";
import Calendar from "../../components/Calendar/Calendar";

const Cabinet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [waterActions, setWaterAction] = useState(() => {
    const localStorageValue = JSON.parse(localStorage.getItem("waterActions"));
    return localStorageValue || [];
  });
  return (
    <div className={s.Section}>
      <div className={s.leftSide}>
        <DayleProgressBar percent={"63"}></DayleProgressBar>
        <Logotype></Logotype>
        <DayleNorm></DayleNorm>
        <AddButton setIsOpen={setIsOpen}></AddButton>
        {isOpen && (
          <AddWater
            setIsOpen={setIsOpen}
            setWaterAction={setWaterAction}
          ></AddWater>
        )}
      </div>
      <div className={s.rightSide}>
        <p>
          Hello<span>, Nadia</span>
        </p>
        <User className={s.user} setUserOpen={setUserOpen}></User>
        <WaterBlock
          setIsOpen={setIsOpen}
          setWaterAction={setWaterAction}
          waterAction={waterActions}
        ></WaterBlock>
        {userOpen && (
        <UserInfo
            setUserOpen={setUserOpen}          
        ></UserInfo>
        )}
        <Calendar></Calendar>
        
      </div>
    </div>
  );
};

export default Cabinet;
