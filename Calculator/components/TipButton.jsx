import React from 'react'
import { useState } from 'react';
import classNames from "classnames";

export default function TipButton({ percent, name }) {
  const ButtonClickable3 = (props) => {
    const [isActive, setActive] = useState();
    const handleToggle = (e) => {
     setActive(!isActive);
     props.onClick(e)
     
    }
    return <div className={classNames("w-full rounded  p-2 text-xl text-white flex-1 bg-[#00474A] has-checked:bg-[#28C4AF]")}>
    
    <label className="flex:1">
    <input
               type="radio"
               name="tip"
               value={percent}
               onClick={handleToggle}
               className=""
             /> 
            
              {percent}%
            </label>
            </div>
            }
  return (
    <>
      <ButtonClickable3 />
    </>
  )
}
