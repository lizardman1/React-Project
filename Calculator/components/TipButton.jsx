import React from 'react'
import { useState } from 'react';

export default function TipButton({ percent, props }) {
  const [isActive, setActive] = useState(false);
    const handleToggle = (e) => {
     setActive(!isActive);
     props.onClick(e)

    }
  return (
    <>
        <button className="w-full rounded bg-[#00474A] p-2 text-xl text-white"
        type="radio"
        // value={props.value}
        name="tip"
        // className={isActive ? "button btn fourth" : "button btn fourthActive"}
        onClick={handleToggle}>
            {percent}%
        </button>
    </>
  )
}
