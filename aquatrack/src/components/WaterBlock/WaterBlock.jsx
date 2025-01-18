import React from 'react'
import s from './WaterBlock.module.css'
import Image from '../../assets/index'


const WaterBlock = ({setIsOpen, waterAction, setWaterAction}) => {

  return (
    <div>
      <div className={s.actionList}>
        <p className={s.text}>Today</p>
        <div className={s.addWater}>
            <button className={s.addWaterWrap} 
              onClick={() => {
              setIsOpen(true);
              }}>
                <img className={s.plusImg} src={Image.addButtonplus}/>
                <p className={s.textLocal}>Add water</p>
            </button>      
                  
        </div>
      </div>
      <div className={s.Block}>
        {waterAction.map((actionData) =>{
            <div className={s.miniBlocks}>
            <img className={s.glassImg} src={Image.glass}/>
            <div className={s.textTimaAndMl}>
              <p className={s.textML}>250 ml</p>
              <p className={s.textTime}>7:00 AM</p>
            </div>
            <div className={s.imges}>
              <img src={Image.change}/>
              <img src={Image.trash}/>
            </div>
          </div>
        })}
          
         
      </div>
    </div>
  )
}

export default WaterBlock
