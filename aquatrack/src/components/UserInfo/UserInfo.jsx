import React from 'react'
import s from './UserInfo.module.css'
import Image from "../../assets/index";

const UserInfo = ({setUserOpen}) => {
  return (
    <div className={s.modalWindowOverlay}>
          <form className={s.modal} >
            <p className={s.title}>Setting</p>                
                <div>
                  <img></img>                        
                </div>
            <div className={s.inputBlocks} >
                {/* <div className={s.inputBlock}>
                    <div className={s.divs}>
                        <p className={s.subTitle}>Your gender identity</p>
                        <label>
                            <input type="radio" name="choice-radio"/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="choice-radio"/>
                            No
                        </label>
                    </div>
                    <div className={s.divs}>
                        <p className={s.subTitle}>Your name</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div className={s.divs}>
                        <p className={s.subTitle}>Email</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div className={s.divs}>
                        <p className={s.subTitle}>My daily norma</p>
                    </div>
                </div>

                <div className={s.inputBlockTwo}>
                    <div className={s.divs}>
                        <p className={s.text}>Your weight in kilograms:</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div className={s.divs}>
                        <p className={s.text}>The time of active participation in sports:</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div className={s.divs}>
                        <p className={s.text}>The required amount of water in liters per day:<p>1.8L</p></p>
                        <input className={s.input} type="text" />
                    </div>                    
                </div> */}
                <div className={s.BlockFirst}>
                    <p className={s.subTitle}>Your gender identity</p>
                        <div className={s.labels}>
                            <label>
                                <input type="radio" name="choice-radio"/>
                                Yes
                            </label>
                            <label>
                                <input type="radio" name="choice-radio"/>
                                No
                            </label>
                        </div>
                </div>
                <div className={s.BlocksSecond}>
                    <div>
                        <p className={s.subTitle}>Your name</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p className={s.text}>Your weight in kilograms:</p>
                        <input className={s.input} type="text" />
                    </div>
                </div>
                <div className={s.BlocksThird}>
                    <div>
                        <p className={s.subTitle}>Email</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p className={s.text}>The time of active participation in sports:</p>
                        <input className={s.input} type="text" />
                    </div>
                </div>
                <div className={s.BlocksFourth}>
                    <p className={s.subTitle}>My daily norma</p>
                    <div className={s.fourWrap}>
                        <div>
                            <p className={s.textFormula}>For woman</p>
                            <p className={s.formula}>V=(M*0,03) + (T*0,4)</p>
                        </div>
                        <div>
                            <p className={s.textFormula}>For man</p>
                            <p className={s.formula}>V=(M*0,04) + (T*0,6)</p>
                        </div>
                    </div>
                    <div className={s.vector}>
                        <img src={Image.Vector}/>
                        <p>Active time in hours</p>
                    </div>
                </div>
            </div>





















            <button
                className={s.close}
                onClick={() => {
                setUserOpen(false);
               }}>
                    close
            </button>
          </form>
        </div>
  )
}

export default UserInfo
