import { createContext, useState, useContext } from "react"
import { TestTipCalculator } from "./TestTipCalculator"


export default function TipComponents() {
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    return (
        <div>
            <div className='w-screen h-screen flex justify-center items-center bg-[#c5e5e8]'>
            <div className='text-4xl text-[00464a] text-center font-bold mb-20'><p>Tip Calculator 005</p>
            <div className='grid grid-cols-2 items-center max-w-2xl mx-auto rounded-4xl bg-white  border-white border-20 font-normal text-base'>

            <TestTipCalculator /> 

            <div className="bg-[#00464a] w-full h-full rounded-xl text-white grid place-items-center">
            <img src="/src/assets/tip.png" alt="" className="h-50 w-auto" /> 
            {/* The results should hide/replace the image when being displayed*/}
             </div>

            </div>
            </div>
            </div>
         </div>

    )
}
