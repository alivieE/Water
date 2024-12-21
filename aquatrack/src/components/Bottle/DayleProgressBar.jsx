import React, { useState } from 'react'

import s from './DayleProgressBar.module.css';

const DayleProgressBar = () => {

    const [waterTake, setWaterTake] = useState()

    const handleSliderChange = (e) => {
        setWaterTake(parseFloat(e.target.value))
    }
  return (
    <div className={s.container}>

    <input
      type="range"
      min="0"
      max="1.5"
      step="0.1"
      value={waterTake}
      onChange={handleSliderChange}      
      className={s.slider}
    />

    <p>{waterTake} L</p>
  </div>
  )
}

export default DayleProgressBar
