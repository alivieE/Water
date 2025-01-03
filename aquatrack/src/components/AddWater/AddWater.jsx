import React, { useState } from "react";
import s from "./AddWater.module.css";
import Image from "../../assets/index";

const AddWater = () => {
  const [waterAmount, setWaterAmount] = useState(250);
  const [actionDate, setActionDate] = useState("");

  const handleInputDate = (event) => {
    setActionDate(event.target.value);
  };

  const handleInputChange = (event) => {
    const value = Number(event.target.value);
    if (value > 5000) {
      setWaterAmount(5000);
    } else if (value < 50) {
      setWaterAmount(50);
    } else {
      setWaterAmount(value);
    }
  };

  const incramentWater = () => {
    setWaterAmount((prevValue) =>
      prevValue + 50 > 5000 ? 5000 : prevValue + 50
    );
  };

  const decramentWater = () => {
    setWaterAmount((prevValue) => (prevValue - 50 < 50 ? 50 : prevValue - 50));
  };

  return (
    <div className={s.modalWindowOverlay}>
      <div className={s.modal}>
        <div>
          <p className={s.title}>Edit the entered amount of water</p>
          <p className={s.subTitle}>Correct entered data:</p>
        </div>
        <div className={s.AmountBlock}>
          <p>Amount fo water</p>
          <div className={s.controlsWrap}>
            <button onClick={decramentWater} className={s.amountChangeButton}>
              <img src={Image.minus} />
            </button>
            <p className={s.inputWrap}>{waterAmount} ml</p>
            <button onClick={incramentWater} className={s.amountChangeButton}>
              <img src={Image.plus} />
            </button>
          </div>
        </div>
        <div className={s.TimeBlock}>
          <p>Recording time:</p>
          <input
            className={s.input}
            type="datetime-local"
            onChange={handleInputDate}
            value={actionDate}
          />
        </div>
        <div className={s.inputBlock}>
          <p className={s.subTitle}>Enter the value of the water used:</p>
          <input
            className={s.input}
            type="number"
            value={waterAmount}
            onChange={handleInputChange}
            max="5000"
            min={"50"}
          />
        </div>

        <button className={s.SaveButton}>Save</button>
      </div>
    </div>
  );
};

export default AddWater;
