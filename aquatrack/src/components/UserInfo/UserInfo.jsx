import React from 'react'
import s from './UserInfo.module.css'

const UserInfo = ({setUserOpen}) => {
  return (
    <div className={s.modalWindowOverlay}>
          <form className={s.modal} >
            <p className={s.title}>Setting</p>                
                <div>
                  <img></img>                        
                </div>
            <div className={s.inputBlock} >
                <div>
                    <div>
                        <p className={s.subTitle}>Your gender identity</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p className={s.subTitle}>Your name</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p className={s.subTitle}>Email</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p className={s.subTitle}>My daily norma</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Your weight in kilograms:</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p>The time of active participation in sports:</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p>The required amount of water in liters per day:<p>1.8L</p></p>
                        <input className={s.input} type="text" />
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
