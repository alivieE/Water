import React,{useState} from 'react'
import s from './UserInfo.module.css'
import Image from "../../assets/index";

const UserInfo = ({ setUserOpen, dailyNorm, setDailyNorm }) => {
    const [userDailyNorm, setUserDailyNorm] = useState(0);
    const [userWieght, setUserWieght] = useState(0);
    const [userSportTime, setUserSportTime] = useState(0);

    function handleDailyNorm(event) {
        setUserDailyNorm(event.target.value);
    }
    function handleUserWeight(event) {
        setUserWieght(event.target.value);
    }
    function handleSportTime(event) {
        setUserSportTime(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const userWater = { amount: userDailyNorm, weight: userWieght, time: userSportTime};
        console.log("Water intake goal:", userDailyNorm);
        localStorage.setItem("userStats", JSON.stringify([userWater]));
        setDailyNorm(userDailyNorm); 
    }

  return (
    <div className={s.modalWindowOverlay} onSubmit={handleSubmit}>
          <form className={s.modal} >
            <p className={s.title}>Setting</p>                
            <div className={s.UserBlock}>
                <img src={Image.UserPhoto}/>
                <img src={Image.upload}/>
                <p>Upload a photo</p>
            </div>
            <div className={s.inputBlocks} >
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
                        <input 
                            className={s.input}
                            type="number"
                            required
                            value={userWieght}
                            onChange={handleUserWeight} 
                        />
                    </div>
                </div>
                <div className={s.BlocksThird}>
                    <div>
                        <p className={s.subTitle}>Email</p>
                        <input className={s.input} type="text" />
                    </div>
                    <div>
                        <p className={s.text}>The time of active participation in sports:</p>
                        <input 
                            className={s.input}
                            type="number"
                            required
                            value={userSportTime}
                            onChange={handleSportTime} 
                        />
                    </div>
                </div>
                <div className={s.BlocksFourth}>
                    <div>
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
                        <div>
                            <input 
                                type="text" 
                                placeholder="* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)" 
                                className={s.inputSpecial}
                            />
                        </div>
                        <div className={s.ActiveTime}>
                            <img src={Image.Vector}/>
                            <p>Active time in hours</p>
                        </div>
                    </div>                        
                </div>
                <div>
                    <div>                        
                        <div className={s.fourRow}>
                                <p className={s.text}>The required amount of water in liters per day:</p>
                                <p className={s.formula}>{dailyNorm}</p>
                                <p className={s.subTitle}>Write down how much water you will drink:</p>
                                <input
                                className={s.input}
                                type="number"
                                required
                                value={userDailyNorm}
                                onChange={handleDailyNorm}
                                />
                        </div> 
                     </div>
                </div>
            </div>

            <button
                className={s.close}
                onClick={() => {
                setUserOpen(false);
               }}>
                    <img src={Image.close}/>
            </button>

            <button 
                className={s.SaveButton} 
                type="submit"
                onClick={(e) => {
                handleSubmit(e);
                setUserOpen(false);
                }}>
                Save
            </button>
          </form>
        </div>
  )
}

export default UserInfo
