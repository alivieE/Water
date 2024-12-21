import React, { useState } from 'react'



const AddWater = () => {
  const Vwater = 250;
  return (
    <div>
      <div>
        <p>Edit the entered amount of water</p>
        <p>Correct entered data:</p>
      </div>      
      <div>
        <p>Amount of water:</p>
        <button></button>
        <p>{Vwater} ml</p>
        <button></button>
      </div>
    </div>
  )
}

export default AddWater
