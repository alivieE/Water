import React from "react";
import s from "./AddButton.module.css";

const AddButton = ({ setIsOpen }) => {
  return (
    <button
      className={s.button}
      onClick={() => {
        setIsOpen(true);
      }}
    >
      {" "}
      + Add water
    </button>
  );
};

export default AddButton;
