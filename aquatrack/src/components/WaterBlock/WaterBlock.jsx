import React from "react";
import s from "./WaterBlock.module.css";
import Image from "../../assets/index";
import dateFormat, { masks } from "dateformat";

const WaterBlock = ({ setIsOpen, waterAction, setWaterAction }) => {
  console.log(waterAction);

  const DeleteWaterAction = (id) => {
    const filteredArray = waterAction.filter((actionData) => {
      return actionData.id !== id;
    });
    setWaterAction(filteredArray);
    localStorage.setItem("waterActions", JSON.stringify(filteredArray));
  };


  return (
    <div>
      <div className={s.actionList}>
        <p className={s.text}>Today</p>
        <div className={s.addWater}>
          <button
            className={s.addWaterWrap}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <img className={s.plusImg} src={Image.addButtonplus} />
            <p className={s.textLocal}>Add water</p>
          </button>
        </div>
      </div>
      <div className={s.Block}>
        {waterAction.map((actionData) => {
          return (
            <div className={s.miniBlocks}>
              <img className={s.glassImg} src={Image.glass} />
              <div className={s.textTimaAndMl}>
                <p className={s.textML}>{actionData.amount} ml</p>
                <p className={s.textTime}>
                  {dateFormat(actionData.date, "shortTime")}
                </p>
              </div>
              <div className={s.imges}>
                <img src={Image.change} />
                <button
                  type="button"
                  onClick={() => {
                    DeleteWaterAction(actionData.id);
                  }}
                >
                  <img src={Image.trash} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WaterBlock;
