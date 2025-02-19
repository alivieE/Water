import React, { useState, useEffect } from "react";
import s from "./Cabinet.module.css";
import images from "../../assets";
import Logotype from "../../components/logo/Logotype";
import DayleNorm from "../../components/Daylynormal/DayleNorm";
import AddButton from "../../components/AddButton/AddButton";
import DayleProgressBar from "../../components/DailyProgressBar/DayleProgressBar";
import AddWater from "../../components/AddWater/AddWater";
import User from "../../components/User/User";
import WaterBlock from "../../components/WaterBlock/WaterBlock";
import UserInfo from "../../components/UserInfo/UserInfo";
import Calendar from "../../components/Calendar/Calendar";

const Cabinet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [dailyNorm, setDailyNorm] = useState(() => {
    return localStorage.getItem("daiylnorm") || 1.5
    
  });  
  const [waterActions, setWaterAction] = useState(() => {
    const localStorageValue = JSON.parse(localStorage.getItem("waterActions"));
    return localStorageValue || [];
  });
  const [pickedDate, setPickedDate] = useState(new Date());
  const [editObj, seteditObj] = useState(null);

  const filteredWaterActions = waterActions.filter((actionObj) => {
    const actionDate = new Date(actionObj.date);

    return (
      actionDate.getFullYear() === pickedDate.getFullYear() &&
      actionDate.getMonth() === pickedDate.getMonth() &&
      actionDate.getDate() === pickedDate.getDate()
    );
  });
  useEffect(() => {
    if (isOpen === false) {
      seteditObj(null);
    }
  }, [isOpen]);

  return (
    <div className={s.Section}>
      <div className={s.leftSide}>
        <DayleProgressBar
          pickedDate={pickedDate}
          dailyNorm={dailyNorm}
          filteredWaterActions={filteredWaterActions}
        ></DayleProgressBar>
        <Logotype></Logotype>
        <DayleNorm 
        dailyNorm={dailyNorm}
        setDailyNorm={setDailyNorm}></DayleNorm>
        <AddButton setIsOpen={setIsOpen}></AddButton>
        {isOpen && (
          <AddWater
            seteditObj={seteditObj}
            setIsOpen={setIsOpen}
            setWaterAction={setWaterAction}
            pickedDate={pickedDate}
            editObj={editObj}
          ></AddWater>
        )}
      </div>
      <div className={s.rightSide}>
        <p>
          Hello<span>, Nadia</span>
        </p>
        <User className={s.user} setUserOpen={setUserOpen}></User>
        <WaterBlock
          seteditObj={seteditObj}
          pickedDate={pickedDate}
          setIsOpen={setIsOpen}
          setWaterAction={setWaterAction}
          waterAction={waterActions}
          filteredWaterActions={filteredWaterActions}
        ></WaterBlock>
        {userOpen && <UserInfo 
        setDailyNorm={setDailyNorm}
        setUserOpen={setUserOpen}></UserInfo>}

        <Calendar
          dailyNorm={dailyNorm}
          waterActions={waterActions}
          setPickedDate={setPickedDate}
        ></Calendar>
      </div>
    </div>
  );
};

export default Cabinet;
