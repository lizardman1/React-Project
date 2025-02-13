import { createContext, useState, useContext } from "react"
import { TipCalculator } from "./TipCalculator"


export default function TipComponents() {
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    return (
        <div>
            <div className='w-screen h-screen flex justify-center items-center bg-[#c5e5e8]'>
            <div className='text-4xl text-[00464a] text-center font-bold mb-20'><p>Tip Calculator</p>
            <div className='grid grid-cols-2 items-center max-w-2xl mx-auto rounded-4xl bg-white  border-white border-20 font-normal text-base'>

            <TipCalculator /> 

            <div className="bg-[#00464a] w-full h-full rounded-xl text-white">
            answer should be here
             </div>

            </div>
            </div>
            </div>
         </div>

    )
}
