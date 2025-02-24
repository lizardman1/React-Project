import React from 'react'
import { useState } from 'react';

export default function TipButton({ percent, setservice, checked =false }) {
  const ButtonClickable3 = (props) => {
   
    const handleToggle = (e) => {
  
    // props.onClick(e)

    setservice(parseFloat(percent))
     
    }
    return <div className="flex w-full h-fit content-center rounded p-2 text-xl text-white items-center justify-center bg-[#00474A] cursor-pointer has-checked:bg-[#28C4AF]"
    onClick={handleToggle}
    
      >
    
    <label 
              className="cursor-pointer"
              
              >
    <input
               type="radio"
               name="tip"
               value={percent}
               checked={checked}
               onChange={() => {}}
               className="hidden"
            
             /> 
            
              {percent}%
            </label>
            </div>
            }
  return (
    <>
    <div className="flex justify-center"
        >
      <ButtonClickable3 />
      </div>
    </>
  )
}
