import React from 'react'
import s from './AddButton.module.css'
import AddWater from '../AddwaterModal/AddWater'



const AddButton = () => {
  return (

      <button className={s.button}> + Add water {AddWater}</button>

  )
}

export default AddButton
