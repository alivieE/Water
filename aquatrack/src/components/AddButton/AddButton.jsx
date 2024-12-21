import React from "react";
import s from "./AddButton.module.css";

const AddButton = ({sumFunction}) => {
  return <button className={s.button} onClick={() => {
    sumFunction(true)
  }}> + Add water</button>;
};

export default AddButton;
