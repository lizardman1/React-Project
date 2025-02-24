import React from 'react'
import { useState } from 'react';

export default function CustomButton({ percent, setservice, checked = false }) {
    const [customVal, setCustomVal] = useState('');
  
    const handleToggle = () => {
      if (customVal) {
        setservice(parseFloat(customVal));
      } else {
        setservice(parseFloat(percent));
      }
    };
  
    const handleCustomChange = (e) => {
      setCustomVal(e.target.value);
    };
  
    return (
      <div className="flex w-full content-center rounded p-2 text-xl text-white items-center justify-center bg-[#00474A] has-checked:bg-[#28C4AF]"
        onClick={handleToggle}
      >
        <label className="">
          <input
            type="text"
            name="tip"
            value={customVal}
            onChange={handleCustomChange}
            className="text-grey-500 text-center"
            style={{ width: "50px" }}
          />
          {percent}%
        </label>
      </div>
    );
  }
