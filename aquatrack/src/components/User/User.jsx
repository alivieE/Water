import React from 'react'
import s from './User.module.css'
import Image from '../../assets/index'

const User = () => {
    const Name = "Nadia"
  return (
    <div className={s.userBlock}>
      <p className={s.name}>{Name}</p>
      <p className={s.photo}></p>
      <p><img src={Image.chevron}/></p>
    </div>
  )
}

export default User
