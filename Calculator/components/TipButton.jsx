import React from 'react'
import { useState } from 'react';
import classNames from "classnames";

export default function TipButton({ percent }) {
  const [isActive, setActive] = useState(false);
  const handleToggle = (e) => {
    setActive(!isActive);
    props.onClick(e)
    
   }; 
  return (
    <>
        <button className={classNames("w-full rounded  p-2 text-xl text-white", {"bg-[#28C4AF]": isActive, "bg-[#00474A]": !isActive})}
        type="button"
        name="tip"
        onClick={handleToggle}
        >
            {percent}%
        </button>
    </>
  )
}
