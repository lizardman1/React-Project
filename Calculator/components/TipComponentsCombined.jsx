import { createContext, useState, useContext } from "react"
import { TipCalculator } from "./TipCalculator"


export default function TipComponents() {
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    return (
        <div>
            <div className='w-screen h-screen flex justify-center items-center bg-[#c5e5e8]'>
            <div className='text-4xl text-[00464a] text-center font-bold mb-20 space-y-4'><p>Tip Calculator</p>
            <div className='grid grid-cols-2 items-center max-w-2xl mx-auto rounded-4xl bg-white  border-white border-20 font-normal text-base'>
            <div className="bg-[#00464a]">
                <TipCalculator /> 
            </div>

            <div className="bg-[#00464a] w-full h-full rounded-3xl rounded-bl-none text-white grid place-items-center p-2">
            <img src="/src/assets/tip.png" alt="" className="h-50 w-auto" /> 
            {/* The results should hide/replace the image and span when being displayed*/}
            <span className="text-[#c5e5e8]">results will appear here</span>
             </div>

            </div>
            </div>
            </div>
         </div>

    )
}
