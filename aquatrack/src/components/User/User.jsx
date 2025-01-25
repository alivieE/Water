import React from 'react'
import s from './User.module.css'
import Image from '../../assets/index'

const User = ({setUserOpen}) => {
    const Name = "Nadia"
  return (
    <div className={s.userBlock}>
      <p className={s.name}>{Name}</p>      
      <img  className={s.photo}src={Image.UserPhoto}/>
      <button className={s.button}
      onClick={() => {
        setUserOpen(true);
      }}>
        <img src={Image.chevron}/>
      </button>
    </div>
  )
}

export default User
