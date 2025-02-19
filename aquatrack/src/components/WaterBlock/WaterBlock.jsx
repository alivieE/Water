import React from "react";
import s from "./WaterBlock.module.css";
import Image from "../../assets/index";
import dateFormat, { masks } from "dateformat";

const WaterBlock = ({
  setIsOpen,
  waterAction,
  setWaterAction,
  pickedDate,
  filteredWaterActions,
  seteditObj,
}) => {
  const DeleteWaterAction = (id) => {
    const filteredArray = waterAction.filter((actionData) => {
      return actionData.id !== id;
    });
    setWaterAction(filteredArray);
    localStorage.setItem("waterActions", JSON.stringify(filteredArray));
  };
  function editAction(obj) {
    seteditObj(obj);
    setIsOpen(true);
  }

  return (
    <div>
      <div className={s.actionList}>
        <p className={s.text}>{dateFormat(pickedDate, "dd.mm")}</p>
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
      {filteredWaterActions.length === 0 ? (
        <p className={s.placeholder}>no water</p>
      ) : (
        <ul className={s.Block}>
          {filteredWaterActions.map((actionData) => {
            return (
              <li className={s.miniBlocks}>
                <img className={s.glassImg} src={Image.glass} />
                <div className={s.textTimaAndMl}>
                  <p className={s.textML}>{actionData.amount} ml</p>
                  <p className={s.textTime}>
                    {dateFormat(actionData.date, "shortTime")}
                  </p>
                </div>
                <div
                  className={s.imges}
                  
                >
                  <div>
                    <img src={Image.change} type="button"
                  onClick={() => {
                    editAction(actionData);
                  }}/>
                  </div>                
                  <button
                    type="button"
                    className={s.imges}
                    onClick={() => {
                      DeleteWaterAction(actionData.id);
                    }}
                  >
                    <img src={Image.trash} className={s.trashBox} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default WaterBlock;
