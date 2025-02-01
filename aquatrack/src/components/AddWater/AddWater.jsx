import React, { useState } from "react";
import s from "./AddWater.module.css";
import Image from "../../assets/index";
import { v4 as uuidv4 } from "uuid";

const AddWater = ({ setIsOpen, setWaterAction, pickedDate, editObj }) => {
  const [waterAmount, setWaterAmount] = useState(editObj?.amount || 250);
  const [actionDate, setActionDate] = useState(() => {
    const picked = new Date(pickedDate);
    picked.setDate(picked.getDate() + 1); // Додаємо 1 день
    const nextDay = picked.toISOString().slice(0, 16);

    if (editObj) {
      const currentDate = new Date(editObj.date);
      currentDate.setHours(currentDate.getHours() + 2);
      return currentDate.toISOString().slice(0, 16);
    }
    return nextDay;
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("start");
    const actionData = { amount: waterAmount, date: actionDate, id: uuidv4() };
    setWaterAction((prev) => {
      console.log("local");
      localStorage.setItem(
        "waterActions",
        JSON.stringify([...prev, actionData])
      );
      return [...prev, actionData];
    });
    setIsOpen(false);
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
      <form className={s.modal} onSubmit={handleSubmit}>
        <div>
          <p className={s.title}>Edit the entered amount of water</p>
          <p className={s.subTitle}>Correct entered data:</p>
        </div>
        <div className={s.AmountBlock}>
          <p>Amount fo water</p>
          <div className={s.controlsWrap}>
            <button
              type="button"
              onClick={decramentWater}
              className={s.amountChangeButton}
            >
              <img src={Image.minus} />
            </button>
            <p className={s.inputWrap}>{waterAmount} ml</p>
            <button
              type="button"
              onClick={incramentWater}
              className={s.amountChangeButton}
            >
              <img src={Image.addWaterPlus} />
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
            placeholder="Pick date.."
            required
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

        <button className={s.SaveButton} type="submit">
          Save
        </button>

        <button
          className={s.close}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img className={s.img} src={Image.close} />
        </button>
      </form>
    </div>
  );
};

export default AddWater;
