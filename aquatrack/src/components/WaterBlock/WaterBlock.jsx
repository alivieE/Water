import React from 'react'
import s from './WaterBlock.module.css'
import Image from '../../assets/index'

const WaterBlock = () => {
  return (
    <div>
      <div className={s.actionList}>
        <p className={s.text}>Today</p>
        <div>
            <button className={s.addWater}>
                <img className={s.plusImg} src={Image.addButtonplus}/>
                <p>Add water</p>
            </button>            
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default WaterBlock
