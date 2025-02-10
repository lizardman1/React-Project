import InputGroup from "./InputGroup"
import { createContext, useState, useContext } from "react"

const TipContext = createContext({
    monthlyPayment: 0,
    setMonthlyPayment: (monthlyPayment) => { }
})

export function TipForm() {

    const {setMonthlyPayment} = useContext(TipContext)

    function handleSubmit(e)
    {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        
        const {amount, term, interest} = data

        const monthlyInterest = interest / 100 / 12
        const months = term * 12
        setMonthlyPayment(amount * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -months)))

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-l-xl">
            <InputGroup type="text" label="Tip Amount" placeholder="Amount in GBP" name="amount" />
            <div className="grid grid-cols-2 gap-4">
                <InputGroup type="number" label="Tip Term" placeholder="1 year" name="term" />
                <InputGroup type="text" label="Interest Rate" placeholder="5%" name="interest" />
            </div>
            <button className="bg-[#dada33] px-3 py-2 rounded-full font-semibold">Calculate</button>
        </form>
    )
}

export function TipResult() {
    const {monthlyPayment} = useContext(TipContext)
    return (
        <div className="bg-[#00464a] w-full h-full rounded-xl text-white">
            {parseFloat(monthlyPayment).toFixed(2)}
        </div>
    )
}

export default function TipComponents() {
    const [monthlyPayment, setMonthlyPayment] = useState(0)
    return (
        <TipContext.Provider value={{ monthlyPayment, setMonthlyPayment}}>
            <div className='w-screen h-screen flex justify-center items-center bg-[#c5e5e8]'>
            <div className='text-4xl text-[00464a] text-center font-bold mb-20'><p>Tip Calculator</p>
            <div className='grid grid-cols-2 items-center max-w-2xl mx-auto rounded-4xl bg-white  border-white border-20'>
                <TipForm />
                <TipResult />
            </div>
            </div>
            </div>
        </TipContext.Provider>
    )
}

TipComponents.Form = TipForm
TipComponents.Result = TipResult