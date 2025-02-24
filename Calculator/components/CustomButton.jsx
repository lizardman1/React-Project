import React, { useState } from 'react';

export default function CustomButton({ setservice, checked }) {
    const [customVal, setCustomVal] = useState('');

    const handleToggle = () => {
        if (customVal) {
            setservice(parseFloat(customVal));
        }
    };

    const handleCustomChange = (e) => {
        setCustomVal(e.target.value);
    };

    return (
        <div
            className={`flex w-full content-center rounded p-2 text-xl text-white items-center justify-center cursor-pointer ${checked ? 'bg-[#28C4AF]' : 'bg-[#00474A]'}`}
            onClick={handleToggle}
        >
            <label className="cursor-pointer">
                <input
                    type="text"
                    name="tip"
                    value={customVal}
                    onChange={handleCustomChange}
                    className="text-grey-500 text-center"
                    style={{ width: "50px" }}
                />
                %
            </label>
        </div>
    );
}