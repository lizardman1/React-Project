import React, { useState } from 'react';
import { TipCalculator2 } from './TipCalculator2';
import { TipResult } from './TipResult';



function GifCheck() {
    if (submit = true) {
        return <img src="/src/assets/tip.gif" alt="" className="h-50 w-auto" />
    } else {
        return <img src="/src/assets/tip.png" alt="" className="h-50 w-auto" />
    }
}

export default function Xtest() {

    const [total, setTotal] = useState(null);
    const [tip, setTip] = useState(null);

    return (
        <div>
            <div className='w-screen h-screen flex justify-center items-center bg-[#c5e5e8]'>
            <div className='text-4xl text-[00464a] text-center font-bold mb-20 space-y-4'><p>Tip Calculator</p>
            <div className='grid grid-cols-2 items-center max-w-2xl mx-auto rounded-4xl bg-white  border-white border-20 font-normal text-base'>
            <div className="bg-[#00464a]">
            <TipCalculator2 setTotal={setTotal} setTip={setTip} />
            </div>

            <div className="bg-[#00464a] w-full h-full rounded-3xl rounded-bl-none text-white grid place-items-center p-2">
            <img src="/src/assets/tip.png" alt="" className="h-50 w-auto" />
            <TipResult total={total} tip={tip} />
             </div>

            </div>
            </div>
            </div>
         </div>

    )
}
