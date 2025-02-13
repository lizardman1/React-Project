import React from 'react'
import { useState } from 'react';

export default function TipButton( {percent}, {setservice} ) {
  const ButtonClickable3 = (props) => {
    const [isActive, setActive] = useState(false);
    const handleToggle = (e) => {
     setActive(!isActive);
     props.onClick(e)
     props.onClick(setservice({percent}))
     
     
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
               checked={isActive}
               onChange={() => setservice({percent})}
               className="hidden"
             /> 
            
              {percent}%
            </label>
            </div>
            }
  return (
    <>
    <div className="flex justify-center">
      <ButtonClickable3 />
      </div>
    </>
  )
}
