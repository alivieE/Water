import React from 'react'
import s from './DayleNorm.module.css'
import DayleProgressBar from '../Bottle/DayleProgressBar';

const dailyNorm = 1.5;


const DayleNorm = () => {

  return (
    <div className={s.normal}>
        <p className={s.AmountOfWater}>{dailyNorm} L</p>
        <p className={s.text}>My daily norma</p>
    </div>
  )
}

export default DayleNorm
