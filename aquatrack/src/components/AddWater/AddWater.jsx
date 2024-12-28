import React, { useState } from 'react';
import s from './AddWater.module.css';

const AddWater = () => {
  const Vwater = 250;
  const [inputValue, setInputValue] = useState(Vwater);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const plus50 = () => {
    setInputValue((prevValue) => prevValue + 50);
  };

  const minus50 = () => {
    setInputValue((prevValue) => prevValue - 50);
  };
  
  return (
    <div className={s.modalWindowOverlay}>
      <div className={s.modal}>
        
        <div>
          <p className={s.h1Highlighted}>Edit the entered amount of water</p>
          <p className={s.h2Highlighted}>Correct entered data:</p>
        </div>      
        <div>
          <p>Amount of water:</p>
          <button onClick={minus50}>-</button>
          <p onChange={handleInputChange} >{inputValue} ml</p>
          <button onClick={plus50}>+</button>
        </div>
        <div>
          <p>Recording time:</p>
          <input 
              className={s.input}
              type="time"
              placeholder="0:00"
          />

          
        </div>
        <div>
          <p className={s.h2Highlighted}>Enter the value of the water used:</p>
          <input 
          className={s.input}
          type="text"
          placeholder={inputValue}/>
        </div>   
      </div>   
    </div>
  )
}

export default AddWater
